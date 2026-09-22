"use server";

import { addProduct } from "@/lib/products";
import { revalidatePath } from "next/cache";

export async function createProductAction(formData: FormData) {
    const name = String(formData.get("name") ?? "");
    const description = String(formData.get("description") ?? "");
    const price = Number(formData.get("price") ?? 0);

    if (!name || !description || price <= 0) {
    return;
    }

    addProduct(name, description, price);

    revalidatePath("/products");
}