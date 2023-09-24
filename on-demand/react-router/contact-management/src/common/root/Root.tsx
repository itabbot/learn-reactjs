import {JSX, useEffect} from "react";
import {NavLink, Form, Outlet, useNavigation, useLoaderData, useSubmit} from "react-router-dom";
import {Data} from "./func.ts";

export default function Root(): JSX.Element {
    const {contacts, q} = useLoaderData() as Data;
    const navigation = useNavigation();
    const submit = useSubmit();

    // 同步搜索关键字
    useEffect(() => {
        const inputElement = document.getElementById("q") as HTMLInputElement
        if (inputElement) inputElement.value = q;
    }, [q]);

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q");

    return (
        <>
            <div id="sidebar">
                <h1>React Router 联系人管理</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            id="q" type="search" name="q"
                            aria-label="搜索联系人" placeholder="搜索"
                            className={searching ? "loading" : ""}
                            defaultValue={q}
                            onChange={(event) => {
                                const isFirstSearch = q == null;
                                submit(event.currentTarget.form, {
                                    replace: !isFirstSearch,
                                });
                            }}
                        />
                        <div id="search-spinner" aria-hidden hidden={!searching}/>
                        <div className="sr-only" aria-live="polite"></div>
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <NavLink
                                        to={`contacts/${contact.id}`}
                                        className={({isActive, isPending}) =>
                                            isActive ? "active" :
                                                isPending ? "pending" : ""
                                        }
                                    >
                                        {contact.first || contact.last ? (
                                            <>{contact.first} {contact.last} </>
                                        ) : (
                                            <i>No Name</i>
                                        )}
                                        {" "}
                                        {contact.favorite && <span>★</span>}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p><i>No contacts</i></p>
                    )}
                </nav>
            </div>
            <div id="detail" className={navigation.state === "loading" ? "loading" : ""}>
                <Outlet/>
            </div>
        </>
    );
}
