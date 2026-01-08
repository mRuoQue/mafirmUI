// vitest.setup.ts
import { afterEach, beforeEach } from "vitest";
import { cleanup } from "@testing-library/vue";

// 每个测试后清理 DOM
afterEach(() => {
  cleanup();
});

// 如果需要，可以在这里添加全局错误处理
beforeEach(() => {
  // 清除任何可能的错误监听器
  process.removeAllListeners && process.removeAllListeners("uncaughtException");
  process.removeAllListeners &&
    process.removeAllListeners("unhandledRejection");
});

// 为某些库提供兼容性
if (typeof global.global === "undefined") {
  (global as any).global = global;
}
