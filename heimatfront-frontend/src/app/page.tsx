import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import { Box, Paper, Stack } from "@mui/material";

function getCurrentYearString(): string {
  return new Date().getFullYear().toString();
}

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 style={{ marginTop: 70 }}>
        Werde Teil einer der größten deutschen Communities für Arma Reforger,
        Kamerad!
      </h1>
      <Grid container spacing={6} sx={{ paddingTop: 3 }}>
        <Grid size={{ xs: 12, md: 12 }}>
          <h2>Server</h2>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ textAlign: "center" }}>
              <Stack spacing={2}>
                <Paper sx={{ padding: 2 }}>
                  <Stack direction="row" spacing={2}>
                    <p>Status: Online/Offline</p>
                    <p>Rank: #1</p>
                    <p>Servername: Heimat...</p>
                    <p>Spielerzahl: 100/128</p>
                    <p>Mods: true/false</p>
                    <p>Spielerzahl stats: graph</p>
                  </Stack>
                </Paper>
              </Stack>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <h2>Aktuelles Event</h2>
          <Card sx={{ minWidth: 275 }}>
            <CardContent style={{ alignContent: "center" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel
              eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore te feugait nulla
              facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit
              augue duis dolore te feugait nulla facilisi. Nam liber tempor cum
              soluta nobis eleifend option congue nihil imperdiet doming id quod
              mazim placerat facer
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <h2>Neuigkeiten</h2>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel
              eum iriure dolor in hendrerit in vulputate velit esse molestie
              consequat, vel illum dolore eu feugiat nulla facilisis at vero
              eros et accumsan et iusto odio dignissim qui blandit praesent
              luptatum zzril delenit augue duis dolore te feugait nulla
              facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing
              elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
              magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore eu feugiat nulla facilisis at vero eros et accumsan et
              iusto odio dignissim qui blandit praesent luptatum zzril delenit
              augue duis dolore te feugait nulla facilisi. Nam liber tempor cum
              soluta nobis eleifend option congue nihil imperdiet doming id quod
              mazim placerat facer
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
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
