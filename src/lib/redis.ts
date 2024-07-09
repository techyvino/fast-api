import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: "https://bright-flamingo-47466.upstash.io",
  token: "AblqAAIncDFiYTJmYTNhMWVmOTM0ZTgxYjk1YTQ0MzMzZGVmY2JmMXAxNDc0NjY",
});
export default redis;
// const data = await redis.set('foo', 'bar');
