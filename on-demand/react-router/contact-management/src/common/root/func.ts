import {Contact, createContact, getContacts} from "../../api/contacts.ts";
import {LoaderFunctionArgs} from "react-router";
import {redirect} from "react-router-dom";

// 数据定义
export interface Data {
    contacts: Contact[],
    q: string,
}

// 加载器
export async function loader({request}: LoaderFunctionArgs): Promise<Data> {
    const url = new URL(request.url);
    const q = url.searchParams.get("q") || "";
    const contacts = await getContacts(q);
    return {contacts, q};
}

// 提交处理
export async function action() {
    const contact = await createContact();
    return redirect(`/contacts/${contact.id}/edit`);
}
