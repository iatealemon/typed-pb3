export { };

import type { ClassIdentityProps } from "./internal/helper";
import type { pb2WindowBase } from "./pb2Window";

declare global {
    // failed to be included in generation (extractor didn't search for pb2Window subclasses)
    interface pb2WindowLeaderboard extends pb2WindowBase<"pb2WindowLeaderboard"> {
        round_time: unknown;
        round_time_max: unknown;
        players_max: unknown;
        fields: unknown;
        players: unknown;
        teams: unknown;
        my_player_id: unknown;
        my_spectated_id: unknown;
        graphs: unknown;
    }
    var pb2WindowLeaderboard: ClassIdentityProps<"pb2WindowLeaderboard"> & {
        /** Type is unknown. One known value: 0 */
        ICON_ID_REPORT: unknown;
        /** Type is unknown. One known value: 1 */
        ICON_ID_SPECTATE: unknown;
        /** Type is unknown. One known value: 2 */
        ICON_ID_KICK: unknown;
        /** Type is unknown. One known value: 3 */
        ICON_ID_PROMOTE: unknown;
        /** Type is unknown. One known value: 4 */
        ICON_ID_DEMOTE: unknown;
        /** Type is unknown. One known value: 5 */
        ICON_ID_ELIMINATE: unknown;
        /** Type is unknown. One known value: 6 */
        ICON_ID_COIN: unknown;
        /** Type is unknown. One known value: 0 */
        FIELD_TYPE_NUMERIC: unknown;
        /** Type is unknown. One known value: 1 */
        FIELD_TYPE_NUMERIC_ELIMINATIONS: unknown;
        /** Type is unknown. One known value: 2 */
        FIELD_TYPE_NUMERIC_DEATHS: unknown;
        /** Type is unknown. One known value: 3 */
        FIELD_TYPE_NUMERIC_SCORE: unknown;
        /** Type is unknown. One known value: 4 */
        FIELD_TYPE_TEXT_NICKNAME: unknown;
        /** Type is unknown. One known value: 5 */
        FIELD_TYPE_TEXT: unknown;
        /** Type is unknown. One known value: 6 */
        FIELD_TYPE_TEXT_CENTERED: unknown;
        /** Type is unknown. One known value: 7 */
        FIELD_TYPE_BUTTON: unknown;
        /** Type is unknown. One known value: 0 */
        FIELD_WIDTH_AUTO: unknown;
        /** Type is unknown. One known value: -1 */
        FIELD_TEAM_ID_SPECTATORS: unknown;
        /** Type is unknown. One known value: ["pb2WindowLeaderboard.ICON_ID_REPORT","pb2WindowLeaderboard.ICON_ID_SPECTATE","pb2WindowLeaderboard.ICON_ID_KICK","pb2WindowLeaderboard.ICON_ID_PROMOTE","pb2WindowLeaderboard.ICON_ID_DEMOTE","pb2WindowLeaderboard.ICON_ID_ELIMINATE","pb2WindowLeaderboard.ICON_ID_COIN","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC_ELIMINATIONS","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC_DEATHS","pb2WindowLeaderboard.FIELD_TYPE_NUMERIC_SCORE","pb2WindowLeaderboard.FIELD_TYPE_TEXT_NICKNAME","pb2WindowLeaderboard.FIELD_TYPE_TEXT","pb2WindowLeaderboard.FIELD_TYPE_TEXT_CENTERED","pb2WindowLeaderboard.FIELD_TYPE_BUTTON","pb2WindowLeaderboard.FIELD_WIDTH_AUTO","pb2WindowLeaderboard.FIELD_TEAM_ID_SPECTATORS"] */
        ALL_TYPES: unknown;
    }
}
