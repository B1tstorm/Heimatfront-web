import { ServerInfoData, ServerInfoJson } from "@/app/battleMetricsTypes";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Paper,
  Stack,
} from "@mui/material";
import ExtensionIcon from "@mui/icons-material/Extension";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import Link from "next/link";

async function ServerCard() {
  const serverIps: string[] = [
    "167.235.90.86",
    "176.9.114.132",
    "88.99.65.118",
  ];
  const serverInfosResponse = await fetch(
    "https://api.battlemetrics.com/servers?filter[search]=Heimatfront"
  );
  const serverInfosJson: ServerInfoJson = await serverInfosResponse.json();
  const serverInfos: ServerInfoData[] = serverInfosJson.data;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent style={{ textAlign: "center" }}>
        <Stack spacing={2}>
          {serverInfos
            .filter((serverInfos) =>
              serverIps.includes(serverInfos.attributes.ip)
            )
            .map((serverInfo: ServerInfoData, index: number) => (
              <Paper key={index} sx={{ padding: 2 }} elevation={4}>
                <Stack direction="row" spacing={4} alignItems="end">
                  <p>
                    {serverInfo.attributes.status === "online" ? "🟢" : "🔴"}
                  </p>
                  <p>Rang #{serverInfo.attributes.rank}</p>
                  <p>
                    {serverInfo.attributes.players}/
                    {serverInfo.attributes.maxPlayers}
                  </p>
                  <p>{serverInfo.attributes.name}</p>

                  {serverInfo.attributes.details.reforger.mods.length > 1 ? (
                    <ExtensionIcon />
                  ) : (
                    <ExtensionOutlinedIcon />
                  )}
                </Stack>
              </Paper>
            ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Button size="small">
          <Link
            href="https://www.battlemetrics.com/servers/arma3/1234567"
            target="_blank"
          >
            Battlemetrics
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}

export default ServerCard;
