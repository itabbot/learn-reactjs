import localforage from "localforage";
import {matchSorter} from "match-sorter";
import Contact from "../routes/contact.tsx";

// 联系人
interface Contact {
    id: string; // 唯一标识
    createdAt: number; // 创建时间
    favorite: boolean; // 是否收藏
    first?: string; // 名字
    last?: string; // 姓氏
    twitter?: string; // Twitter账号
    avatar?: string; // 头像URL
    notes?: string; // 说明
}

// 联系人关系对象
interface ContactUpdate {
    favorite?: boolean; // 是否收藏
    first?: string; // 名字
    last?: string; // 姓氏
    twitter?: string; // Twitter账号
    avatar?: string; // 头像URL
    notes?: string; // 说明
}

// 保存联系人到本地存储
function save(contacts: Contact[]) {
    return localforage.setItem("contacts", contacts);
}

// 获取本地存储的联系人
async function queryAll(): Promise<Contact[]> {
    return await localforage.getItem("contacts") || []
}

// 模拟网络请求延迟的缓存器
let fakeCache: Map<string, boolean> = new Map();

// 模拟网络请求的延迟
async function fakeNetwork(key?: string): Promise<void> {
    if (!key) {
        fakeCache = new Map();
    } else {
        if (fakeCache.has(key)) return;
        else fakeCache.set(key, true);
    }

    // 随机延迟
    return new Promise(resolve => {
        setTimeout(resolve, Math.random() * 800);
    });
}

/**
 * 获取联系人列表
 * @param queryStr {string} 查询字符串
 */
export async function getContacts(queryStr?: string): Promise<Contact[]> {
    await fakeNetwork(`getContacts:${queryStr}`);
    let contacts = await queryAll();
    if (!contacts) contacts = [];
    if (queryStr) {
        contacts = matchSorter(contacts, queryStr, {keys: ["first", "last"]});
    }
    return contacts;
}

/**
 * 创建联系人
 */
export async function createContact(): Promise<Contact> {
    await fakeNetwork();
    const contact: Contact = {
        id: Math.random().toString(36).substring(2, 9),
        createdAt: Date.now(),
        favorite: false,
    };
    const contacts = await getContacts();
    contacts.unshift(contact);
    await save(contacts);
    return contact;
}

/**
 * 获取单个联系人
 * @param id {string} 唯一标识
 */
export async function getContact(id: string): Promise<Contact | null> {
    await fakeNetwork(`contact:${id}`);
    const contacts = await queryAll();
    const contact = contacts.find(contact => contact.id === id);
    return contact ?? null;
}

/**
 * 更新联系人
 */
export async function updateContact(id: string, updates: ContactUpdate): Promise<Contact> {
    await fakeNetwork();
    const contacts = await queryAll();
    const contact = contacts.find(contact => contact.id === id);
    if (!contact) throw new Error(`联系人不存在 ${id}`);
    Object.assign(contact, updates);
    await save(contacts);
    return contact;
}

/**
 * 删除联系人
 */
export async function deleteContact(id: string): Promise<boolean> {
    const contacts = await queryAll();
    const index = contacts.findIndex(contact => contact.id === id);
    if (index > -1) {
        contacts.splice(index, 1);
        await save(contacts);
        return true;
    }
    return false;
}
