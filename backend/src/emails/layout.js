export const baseLayout = (content) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
  <meta name="color-scheme" content="light"/>
  <meta name="supported-color-schemes" content="light"/>
</head>

<body style="
  margin:0;
  padding:0;
  background:#f6f6f3;
  font-family:Inter,Segoe UI,Helvetica,Arial,sans-serif;
  color:#111827;
">

  <table
    width="100%"
    cellpadding="0"
    cellspacing="0"
    border="0"
    style="background:#f6f6f3;padding:28px 16px;"
  >
    <tr>
      <td align="center">

        <!-- Main container -->
        <table
          width="560"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="
            width:100%;
            max-width:560px;
            background:#ffffff;
            border:1px solid #d9d9d5;
          "
        >

          <!-- Header -->
          <tr>
            <td style="
              padding:20px 24px;
              border-bottom:1px solid #d9d9d5;
              background:#ffffff;
            ">

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>

                  <td align="left">
                    <table
                      cellpadding="0"
                      cellspacing="0"
                      border="0"
                    >
                      <tr>

                        <!-- Brand mark -->
                        <td style="
                          width:8px;
                          height:8px;
                          background:#BC1D26;
                          border:2px solid #7E131A;
                          padding:0;
                          font-size:0;
                          line-height:0;
                        ">
                          &nbsp;
                        </td>

                        <td style="
                          padding-left:9px;
                          font-size:15px;
                          line-height:1;
                          font-weight:800;
                          letter-spacing:-0.3px;
                          color:#111827;
                        ">
                          VOIMA
                        </td>

                      </tr>
                    </table>
                  </td>

                  <td align="right" style="
                    font-size:10px;
                    line-height:1;
                    font-weight:700;
                    letter-spacing:0.08em;
                    color:#9ca3af;
                  ">
                    INITIATIVE
                  </td>

                </tr>
              </table>

            </td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="
              padding:32px 28px;
              background:#ffffff;
            ">
              ${content}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="
              padding:18px 24px;
              background:#fafafa;
              border-top:1px solid #e5e5e1;
            ">

              <table
                width="100%"
                cellpadding="0"
                cellspacing="0"
                border="0"
              >
                <tr>

                  <td style="
                    font-size:11px;
                    line-height:1.6;
                    color:#8b8b87;
                  ">
                    Voima Initiative
                  </td>

                  <td align="right" style="
                    font-size:10px;
                    line-height:1.6;
                    color:#a3a3a0;
                  ">
                    Health · Advocacy · Impact
                  </td>

                </tr>
              </table>

            </td>
          </tr>

        </table>

        <!-- Outside footer -->
        <table
          width="560"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="width:100%;max-width:560px;"
        >
          <tr>
            <td align="center" style="
              padding:16px 20px 4px;
              font-size:10px;
              line-height:1.5;
              color:#a3a3a0;
            ">
              Building healthier communities through innovation,
              advocacy &amp; impact. 
              Need more information or help? Send us a mail voimagh@gmail.com
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

