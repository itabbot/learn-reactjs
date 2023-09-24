import {getContact, updateContact} from "../../api/contacts.ts";
import {LoaderFunctionArgs} from "react-router";
import {ActionFunctionArgs} from "react-router-dom";

// 加载器
export async function loader({params}: LoaderFunctionArgs) {
    const contact = await getContact(params.contactId || "");
    if (!contact) throw new Error("Not Found")
    return contact;
}

// 提交处理
export async function action({request, params}: ActionFunctionArgs) {
    const formData = await request.formData();
    return updateContact(params.contactId || "", {
        favorite: formData.get("favorite") === "true",
    });
}
