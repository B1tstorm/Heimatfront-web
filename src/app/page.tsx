import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid2";
import { Stack, Typography } from "@mui/material";

import Footer from "./components/footer/Footer";
import PreviewCard from "./components/cards/PreviewCard";
import StyledCard from "./components/cards/StyledCard";
import ServerCard from "./components/cards/ServerCard";

export default async function Home() {
  return (
    <div className={styles.page}>
      <Grid container spacing={6}>
        <Grid size={{ xs: 12, md: 12 }}>
          <StyledCard>
            <Stack spacing={2}>
              <Typography variant="h4" component="div">
                Werde Teil einer der größten deutschen Communities für Arma
                Reforger, Kamerad!
              </Typography>
            </Stack>
          </StyledCard>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <h2>Event</h2>
          <PreviewCard
            title="Squad vs Squad Turnier"
            description="🔥 Squad-Turnier – Zeigt, was euer Team draufhat! 🔥 Macht euch bereit
                            für das ultimative Squad-Turnier! In diesem actiongeladenen Wettbewerb
                            treten Squads in intensiven Matches gegeneinander an, um zu beweisen,
                            welches Team das beste ist. 💥 Modus: Squad vs. Squad 👥 Teamgröße:
                            max. 6 Spieler pro Squad 🏆 Ziel: Gewinnt gegen gegnerische Squads und
                            sichert euch den Turniersieg! 🎮 Game: Arma Reforger 📅 Datum:
                            15.03.2025 ⏰ Uhrzeit: 15:00 Uhr 📍 Ort: SV7 Heimatfront Eventserver
                            Strategie, Teamwork und Skill sind gefragt! Seid ihr bereit, eure
                            Gegner zu dominieren und euch den Sieg zu holen? Meldet euer Squad
                            jetzt an und kämpft um Ruhm und Ehre! 🔥🏆"
            moreBtnHref="/events"
            extraBtnHref="https://challonge.com/de/tournaments/signup/3nzqpn8SZn"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <h2>News</h2>
          <PreviewCard
            title="Suchen Verstärkung"
            description="Wir suchen wieder dringend Verstärkung in unserem Server-Team.
                        Anforderungen an euch sind: Mind. 18 Jahre alt geistige Reife
                        ein gut funktionierendes Headset Ehrgeiz + selbstständiges
                        Arbeiten evtl. Erfahrung (kein MUSS) Was wir euch bieten:
                        Aufstiegsmöglichkeiten Ausbildung und Einweisung in den Support
                        einen zugewiesenen Mentor für eure Probezeit ein herzliches Team
                        und Zusammenhalt Wenn ihr euch in dieser Aufgabe seht, erstellt
                        gerne ein -Ticket (Bewerbung) Bitte beachtet, dass ihr das
                        RICHTIGE Ticket aufmacht."
            moreBtnHref="/news"
          />
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <h2>Server</h2>
          <ServerCard />
        </Grid>

        <Grid size={{ xs: 12, md: 12 }}>
          <h2>Unterstütze das Projekt</h2>
          <StyledCard>
            <Stack spacing={2}>
              <Typography variant="subtitle1">
                Du kannst das Projekt mit guten Ideen bereichern
              </Typography>
              <Typography variant="body1">
                - Ideen die das Spielerlebnis betreffen, kannst du im Discord im
                Channel Vorschläge mitteilen
              </Typography>
              <Typography variant="body1">
                - Ideen die unsere Website oder unseren eigenen Bot betreffen
                kannst du über Github mitteilen - Ideen die unsere Website oder
                unseren eigenen Bot betreffen kannst du über Github mitteilen
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
          </StyledCard>
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}
