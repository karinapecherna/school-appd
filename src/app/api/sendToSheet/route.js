import { google } from 'googleapis';

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  spreadsheetId: process.env.SPREADSHEET_ID,
};

async function sendDataToSheet(dataArray) {
  const auth = new google.auth.JWT(
    credentials.client_email,
    null,
    credentials.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
  );

  const sheets = google.sheets({ version: 'v4', auth });

  const ranges = ['Пн!B2:F100', 'Вт!B2:F100', 'Ср!B2:F100', 'Чт!B2:F100', 'Пт!B2:F100'];

  const responses = await Promise.all(
    dataArray.map((data, index) => {
      return sheets.spreadsheets.values.append({
        spreadsheetId: credentials.spreadsheetId,
        range: ranges[index],
        valueInputOption: 'RAW',
        requestBody: {
          values: [[data.first, data.second, data.snack]],
        },
      });
    })
  );

  return responses;
}

export async function POST(req) {
  try {
    const { allDaysData } = await req.json();
    await sendDataToSheet(allDaysData);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
