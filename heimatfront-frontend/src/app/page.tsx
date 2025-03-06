import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

function getCurrentYearString(): string {
  return new Date().getFullYear().toString();
}

export default async function Home() {
  const serverInfosResponse = await fetch(
    "https://api.battlemetrics.com/servers?filter[search]=Heimatfront"
  );
  const serverInfosJson = await serverInfosResponse.json();
  const serverInfos = serverInfosJson.data;

  return (
    <div className={styles.page}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 12 }}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ textAlign: "center" }}>
              <Stack spacing={2}>
                <h1>
                  Werde Teil einer der größten deutschen Communities für Arma
                  Reforger, Kamerad!
                </h1>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <h2>Event</h2>
          <Card
            sx={{
              minHeight: 400,
              maxHeight: 400,
              maxWidth: 800,
              overflow: "auto",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div" textAlign={"center"}>
                Squad vs Squad Turnier
              </Typography>
              <Typography variant="body1">
                DE: 🔥 Squad-Turnier – Zeigt, was euer Team draufhat! 🔥 Macht
                euch bereit für das ultimative Squad-Turnier! In diesem
                actiongeladenen Wettbewerb treten Squads in intensiven Matches
                gegeneinander an, um zu beweisen, welches Team das beste ist. 💥
                Modus: Squad vs. Squad 👥 Teamgröße: max. 6 Spieler pro Squad 🏆
                Ziel: Gewinnt gegen gegnerische Squads und sichert euch den
                Turniersieg! 🎮 Game: Arma Reforger 📅 Datum: 15.03.2025 ⏰
                Uhrzeit: 18:00 Uhr 📍 Ort: SV7 Heimatfront Eventserver
                Strategie, Teamwork und Skill sind gefragt! Seid ihr bereit,
                eure Gegner zu dominieren und euch den Sieg zu holen? Meldet
                euer Squad jetzt an und kämpft um Ruhm und Ehre! 🔥🏆 Anmeldung
                & weitere Infos:
                https://challonge.com/de/tournaments/signup/3nzqpn8SZn
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link href="/events">Weiterlesen</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <h2>News</h2>
          <Card
            sx={{
              minHeight: 400,
              maxHeight: 400,
              maxWidth: 800,
              overflow: "auto",
            }}
          >
            <CardContent>
              <Typography variant="h6" component="div" textAlign={"center"}>
                Suchen Verstärkung
              </Typography>
              <Typography variant="body1">
                Wir suchen wieder dringend Verstärkung in unserem Server-Team.
                Anforderungen an euch sind: Mind. 18 Jahre alt geistige Reife
                ein gut funktionierendes Headset Ehrgeiz + selbstständiges
                Arbeiten evtl. Erfahrung (kein MUSS) Was wir euch bieten:
                Aufstiegsmöglichkeiten Ausbildung und Einweisung in den Support
                einen zugewiesenen Mentor für eure Probezeit ein herzliches Team
                und Zusammenhalt Wenn ihr euch in dieser Aufgabe seht, erstellt
                gerne ein -Ticket (Bewerbung) Bitte beachtet, dass ihr das
                RICHTIGE Ticket aufmacht.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">
                <Link href="/news">Weiterlesen</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <h2>Server</h2>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ textAlign: "center" }}>
              <Stack spacing={2}>
                {serverInfos.map((serverInfo, index) => (
                  <Paper key={index} sx={{ padding: 2 }} elevation={4}>
                    <Stack direction="row" spacing={4}>
                      <p>{serverInfo.attributes.status}</p>
                      <p>Rang #{serverInfo.attributes.rank}</p>
                      <p>
                        {serverInfo.attributes.players}/
                        {serverInfo.attributes.maxPlayers}
                      </p>
                      <p>{serverInfo.attributes.name}</p>
                      <p>
                        {serverInfo.attributes.details.reforger.mods.length > 1
                          ? "Mit Mods"
                          : "Keine Mods"}
                      </p>
                    </Stack>
                  </Paper>
                ))}
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small">
                <a href="https://www.battlemetrics.com/servers/arma3/1234567">
                  Battlemetrics
                </a>
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <h2>Unterstütze das Projekt</h2>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Stack spacing={2}>
                <Typography variant="subtitle1">
                  Du kannst das Projekt mit guten Ideen bereichern
                </Typography>
                <Typography variant="body1">
                  - Ideen die das Spielerlebnis betreffen, kannst du im Discord
                  im Channel Vorschläge mitteilen
                </Typography>
                <Typography variant="body1">
                  - Ideen die unsere Website oder unseren eigenen Bot betreffen
                  kannst du über Github mitteilen - Ideen die unsere Website
                  oder unseren eigenen Bot betreffen kannst du über Github
                  mitteilen
                </Typography>
                <Typography variant="subtitle1">
                  Oder mit einer Spende um die monatlichen Kosten zu decken
                  {"  "}
                  <a href="https://ko-fi.com/heimatfront">
                    <Image
                      src="/kofi_symbol.png"
                      alt="Official Ko-fi logo"
                      width={30}
                      height={30}
                    />
                  </a>
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <footer className={styles.footer}>
        <pre>
          <a href="https://ko-fi.com/heimatfront">
            Spenden
            <Image
              src="/kofi_symbol.png"
              alt="Official Ko-fi logo"
              width={30}
              height={30}
            />
          </a>
        </pre>
        <pre>
          <a href="https://discord.gg/heimatfront">
            Discord
            <Image
              src="/Discord-Symbol-Blurple.png"
              alt="Official Discord logo"
              width={35}
              height={30}
            />
          </a>
        </pre>
        <pre>
          <a href="https://github.com/B1tstorm/Heimafront-web/">
            Projekt
            <Image
              src="/github-mark.png"
              alt="Official GitHub logo"
              width={30}
              height={30}
            />
          </a>
        </pre>
        <pre>
          <a href="https://discord.gg/Es8RVSNW">
            Dev Kontakt
            <Image
              src="https://avatars.githubusercontent.com/u/51802149?v=4"
              alt="Picture of the author"
              width={30}
              height={30}
            />
            {getCurrentYearString()}
          </a>
        </pre>
      </footer>
    </div>
  );
}
