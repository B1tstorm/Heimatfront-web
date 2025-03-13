"use client";
import { ServerInfoData } from "@/app/battleMetricsTypes";
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
import { useBattleMetricsAPI } from "./useBattleMetricsAPI";
import { JSX } from "react";
import styles from "./styles.module.css";

function ServerCard(): JSX.Element {
  const { serverInfosData, refetchServerInfos } = useBattleMetricsAPI();

  return (
    <Card className={styles.myMuiCard} sx={{ minWidth: 275 }}>
      <CardContent style={{ textAlign: "center" }}>
        <Stack spacing={2}>
          {serverInfosData.map((serverInfo: ServerInfoData, index: number) => (
            <Paper
              key={index}
              sx={{ padding: 2 }}
              elevation={4}
              className={styles.myMuiPaper}
            >
              <Stack direction="row" spacing={4} alignItems="end">
                <p>{serverInfo.attributes.status === "online" ? "🟢" : "🔴"}</p>
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
        <>
          <Button size="small" variant="contained">
            <Link
              href="https://www.battlemetrics.com/servers/search?q=Heimatfront&sort=score&game=reforger&countries%5Bor%5D=DE"
              target="_blank"
            >
              Battlemetrics
            </Link>
          </Button>
          <Button size="small" onClick={refetchServerInfos} variant="contained">
            Reload
          </Button>
        </>
      </CardActions>
    </Card>
  );
}

export default ServerCard;
