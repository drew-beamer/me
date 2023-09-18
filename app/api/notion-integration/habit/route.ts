import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

type HabitProperties = {
    pageId: string;
    property: string;
}

export async function PATCH(req: NextRequest) {
    const { body } = req;
    try {
        const { pageId, property } = body as unknown as HabitProperties;
        const notion = new Client({ auth: process.env.NOTION_TOKEN });
        const response = await notion.pages.update({
            page_id: pageId,
            properties: {
                [property]: {
                    checkbox: true,
                },
            },
        });
        if (response.id === undefined) {
            return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
        }
        return NextResponse.json({ message: 'Success' })
    }
    catch (err) {
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}