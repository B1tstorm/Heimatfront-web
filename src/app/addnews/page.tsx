"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { NewsItem } from "../news/types";
import { addNewsItem } from "./newsActions";
import styles from "@/app/components/cards/styles.module.css";

export default function Page() {
  const [title, setTitle] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [externalLink, setExternalLink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const newsItem: NewsItem = {
        title: title,
        text: text,
        createdAt: new Date(),
        externalLink: externalLink,
      };
      const hasAdded = await addNewsItem(newsItem);

      if (hasAdded) {
        setSuccess(true);
        resetFields();
      } else {
        setError("Fehler beim Speichern der Daten.");
      }
    } catch (error) {
      setError(`Fehler beim Speichern der Daten: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  function resetFields(): void {
    setTitle("");
    setText("");
    setExternalLink("");
  }

  return (
    <Container maxWidth="md" sx={{ paddingTop: 15 }}>
      <Card sx={{ mt: 4 }} className={styles.myMuiCard}>
        <CardContent>
          <Typography variant="h3" gutterBottom>
            Erstelle neuen News Eintrag
          </Typography>

          <form
            onSubmit={handleSubmit}
            onClick={() => {
              setSuccess(false);
              setError("");
            }}
          >
            <TextField
              label="Titel"
              variant="outlined"
              fullWidth
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Text"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
              sx={{ mb: 2 }}
              required
            />
            <TextField
              label="Link/URL"
              variant="outlined"
              fullWidth
              multiline
              rows={1}
              value={externalLink}
              onChange={(e) => setExternalLink(e.target.value)}
              sx={{ mb: 2 }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
              >
                {loading ? "Speichern..." : "Speichern"}
              </Button>
            </Box>
          </form>

          {success && (
            <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
              Nachricht erfolgreich gespeichert!
            </Typography>
          )}

          {error && (
            <Typography variant="body1" color="error.main" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
