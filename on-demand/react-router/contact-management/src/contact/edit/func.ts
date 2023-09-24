import {updateContact} from "../../api/contacts.ts";
import {ActionFunctionArgs, redirect} from "react-router-dom";

// 处理提交
export async function action({request, params}: ActionFunctionArgs) {
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    await updateContact(params.contactId || "", updates);
    return redirect(`/contacts/${params.contactId}`);
}
