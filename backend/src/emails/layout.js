export const baseLayout = (content) => `
<!DOCTYPE html><html><head><meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;background:#f4f5f7;font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;color:#525252;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5f7;padding:32px 0;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(15,23,42,0.06);">
        <tr><td style="background:#BC1D26;padding:24px 32px;">
          <span style="color:#fff;font-size:20px;font-weight:700;letter-spacing:-0.02em;">Voima Initiative</span>
        </td></tr>
        <tr><td style="padding:32px;">${content}</td></tr>
        <tr><td style="padding:20px 32px;background:#f8fafc;border-top:1px solid #eef2f7;">
          <p style="margin:0;font-size:12px;color:#525252;">
            Building healthier communities through innovation, advocacy & impact.
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>`;