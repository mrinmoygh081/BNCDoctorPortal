import { query } from "@/db/db";
import { sendRes } from "@/utils/resHelper";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, phone, age, sex, address, patientId, date } = req.body;

    try {
      let sql = `INSERT INTO patients (name, phone, age, sex, address) VALUES(?, ?, ?, ?, ?)`;

      const result = await query({
        query: sql,
        values: [name, phone, age, sex, address],
      });
      console.log("result", result);
      if (!result.error) {
        sendRes(res, true, 200, "Data added", result, null);
      } else {
        sendRes(res, false, 200, "Patient is added", result, null);
      }
    } catch (error) {
      console.log(error);
      sendRes(res, false, 400, "Error", error, null);
    }
  }
};

export default handler;
