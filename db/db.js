import mysql from "mysql2/promise";

export async function query({ query, values = [] }) {
  const db = await mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "mrinmoy",
    password: "123456",
    database: "doctorportal",
    multipleStatements: true,
  });

  try {
    const [results] = await db.execute(query, values);
    await db.end();
    return results;
  } catch (error) {
    return { error };
  }
}
