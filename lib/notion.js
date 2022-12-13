import { Client } from "@notionhq/client";

// MEMBERS
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const getDatabase = async (databaseId) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });
  return response.results;
};

export const getPage = async (pageId) => {
  const response = await notion.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};

// WAREHOUSE
const notion_wareHouse = new Client({
  auth: process.env.NOTION_TOKEN_WAREHOUSE,
});

export const getDatabase_wareHouse = async (databaseId) => {
  console.log("【notion_wareHouse】");
  console.log(notion_wareHouse);
  const response = await notion_wareHouse.databases.query({
    database_id: databaseId,
  });
  console.log("【結果】");
  console.log(response.results);
  return response.results;
};

export const getPage_wareHouse = async (pageId) => {
  const response = await notion_wareHouse.pages.retrieve({ page_id: pageId });
  return response;
};

export const getBlocks_wareHouse = async (blockId) => {
  const blocks = [];
  let cursor;
  while (true) {
    const { results, next_cursor } = await notion_wareHouse.blocks.children.list({
      start_cursor: cursor,
      block_id: blockId,
    });
    blocks.push(...results);
    if (!next_cursor) {
      break;
    }
    cursor = next_cursor;
  }
  return blocks;
};