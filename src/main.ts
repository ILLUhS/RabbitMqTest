import {app, port} from "./app";

const bootstrap = async (): Promise<void> => {
    try {
        app.listen(port, () => {
            console.log(`app listening on port ${port}`);
        });
    } catch (e) {
        console.log(e);
    }
};
bootstrap();