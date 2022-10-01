import { checkToken } from "../../backendLibs/checkToken";
import { readChatRoomsDB } from "../../backendLibs/dbLib";

export default function roomRoute(req, res) {
    const user = checkToken(req);
    if (!user) {
        return res.status(401).json({
            ok: false,
            message: "Yon don't permission to access this api",
        });
    }
    const chatrooms = readChatRoomsDB();

    //create room data and return response
    const result = chatrooms.map((element) => {
        return {
            roomId: element.roomId,
            roomName: element.roomName,
        };
    });
    return res.status(200).json({
        ok: true,
        rooms: result,
    });
}
