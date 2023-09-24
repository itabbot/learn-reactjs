import {JSX} from "react";
import {Form, useLoaderData, useFetcher} from "react-router-dom";
import {Contact} from "../../api/contacts.ts";

// 收藏组件
function Favorite({contact}: { contact: Contact }) {
    let favorite = contact.favorite;

    const fetcher = useFetcher();
    if (fetcher.formData) {
        favorite = fetcher.formData.get("favorite") === "true";
    }

    return (
        <fetcher.Form method="post">
            <button
                name="favorite"
                value={favorite ? "false" : "true"}
                aria-label={favorite ? "取消收藏" : "收藏"}
            >
                {favorite ? "★" : "☆"}
            </button>
        </fetcher.Form>
    );
}

// 联系人详情组件
export default function ContactDetail(): JSX.Element {
    const contact = useLoaderData() as Contact;
    return (
        <div id="contact">
            <div><img key={contact.avatar} src={contact.avatar || undefined} alt=""/></div>
            <div>
                <h1>
                    {contact.first || contact.last ? (
                        <>{contact.first} {contact.last}</>
                    ) : (
                        <i>No Name</i>
                    )}{" "}
                    <Favorite contact={contact}/>
                </h1>

                {contact.twitter && (
                    <p>
                        <a target="_blank" href={`https://twitter.com/${contact.twitter}`}>
                            {contact.twitter}
                        </a>
                    </p>
                )}

                {contact.notes && <p>{contact.notes}</p>}

                <div>
                    <Form action="../edit">
                        <button type="submit">编辑</button>
                    </Form>
                    <Form
                        method="post" action="destroy"
                        onSubmit={(event) => {
                            if (!confirm("请确认是否要删除此记录。")) event.preventDefault();
                        }}
                    >
                        <button type="submit">删除</button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
