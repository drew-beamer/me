import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

type HabitProperties = {
    pageId: string;
    property: string;
};

// eslint-disable-next-line import/prefer-default-export
export async function PATCH(req: NextRequest) {
    try {
        const { pageId, property } = (await req.json()) as HabitProperties;
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
            return NextResponse.json(
                { message: "Internal Server Error" },
                { status: 500 }
            );
        }
        return NextResponse.json({ message: "Success" });
    } catch (err) {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}
