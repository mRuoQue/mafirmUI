import path from "path";
import fs from "fs";
export const getComponentListName = async () => {
  // 获取component 目录路劲
  const componentPath = path.resolve(__dirname, "../packages/components");
  try {
    const componentList = await fs.promises.readdir(componentPath);
    return componentList || [];
  } catch (error) {
    // 将error转换为string类型
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    throw new Error(`Failed to read component directory: ${errorMessage}`);
  }
};
