import app from "./server";

const PORT = Number(process.env.PORT ?? 8080);

app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Builder signing server listening on :${PORT}`);
});

