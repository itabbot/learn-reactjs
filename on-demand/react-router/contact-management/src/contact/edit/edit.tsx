import {JSX} from "react";
import {Form, useLoaderData, useNavigate,} from "react-router-dom";
import {Contact} from "../../api/contacts.ts";

export default function EditContact(): JSX.Element {
    const contact = useLoaderData() as Contact;
    const navigate = useNavigate();
    return (
        <Form method="post" id="contact-form">
            <p>
                <span>名字</span>
                <input
                    placeholder="名字" aria-label="名字"
                    type="text" name="first"
                    defaultValue={contact.first}
                />
                <input
                    placeholder="姓氏" aria-label="姓氏"
                    type="text" name="last"
                    defaultValue={contact.last}
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    type="text"
                    name="twitter" placeholder="@xxx"
                    defaultValue={contact.twitter}
                />
            </label>
            <label>
                <span>头像URL</span>
                <input
                    placeholder="/avatar.jpeg" aria-label="头像URL"
                    type="text" name="avatar"
                    defaultValue={contact.avatar}
                />
            </label>
            <label>
                <span>说明</span>
                <textarea
                    name="notes"
                    defaultValue={contact.notes}
                    rows={6}
                />
            </label>
            <p>
                <button type="submit">保存</button>
                <button
                    type="button"
                    onClick={() => {
                        navigate(-1);
                    }}>
                    取消
                </button>
            </p>
        </Form>
    );
}