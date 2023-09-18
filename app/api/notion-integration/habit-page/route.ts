import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

/**
 * GET request handler
 * Makes a request to the Notion API to get the current day's habits from my database.
 *
 * @returns a response containing the current day's habits
 */
export async function GET() {
    const notion = new Client({ auth: process.env.NOTION_TOKEN });
    const currDate = new Date();
    const month = ("0" + (currDate.getMonth() + 1)).slice(-2);
    const day = ("0" + currDate.getDate()).slice(-2);
    const currDateString = `${currDate.getFullYear()}-${month}-${day}`;
    if (process.env.NOTION_HABIT_DATABASE !== undefined) {
        const response = await notion.databases.query({
            database_id: process.env.NOTION_HABIT_DATABASE,
            filter: {
                property: "Date",
                date: {
                    equals: currDateString,
                },
            },
        });
        if ("properties" in response.results[0]) {
            const pageProperties = response.results[0]?.properties;

            // removes non-habit properties 
            delete pageProperties.Date;
            delete pageProperties.Selection;
            delete pageProperties.Name;
            delete pageProperties["Created On"];
            delete pageProperties["Day"];
            delete pageProperties["Progress Bar"];

            return NextResponse.json(pageProperties);
        } else {
            return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
        }
    } else {
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
}

export const dynamic = "force-dynamic";
