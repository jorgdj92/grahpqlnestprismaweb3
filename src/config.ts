import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    conectorApi: {
      url: process.env.INVOKE_URL,
    },
    appPort: process.env.PORT,
  };
});
