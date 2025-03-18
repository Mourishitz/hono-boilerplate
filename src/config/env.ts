type EnvironmnetKeys = {
  Port: number;
  AppKey: string;
  AppUrl: string;
  NodeEnv: string;
  DatabaseConnection: string;
};

const Env: EnvironmnetKeys = {
  Port: +(process.env.PORT || 3000),
  AppKey: process.env.APP_KEY || "test",
  AppUrl: process.env.APP_URL || "http://localhost:3000",
  NodeEnv: process.env.NODE_ENV || "development",
  DatabaseConnection: process.env.DATABASE_CONNECTION || "localDatabase",
};

export default Env;
