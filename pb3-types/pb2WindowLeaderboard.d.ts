import type { ClassIdentityProps } from "./internal/helper";
import type { pb2WindowInstanceBase } from "./pb2Window";
export {};

declare global {
    /** unfinished */
    const pb2WindowLeaderboard: ClassIdentityProps<"pb2WindowLeaderboard"> & {
        readonly ALL_TYPES: any;
        readonly FIELD_TEAM_ID_SPECTATORS: any;
        readonly FIELD_TYPE_BUTTON: any;
        readonly FIELD_TYPE_NUMERIC: any;
        readonly FIELD_TYPE_NUMERIC_DEATHS: any;
        readonly FIELD_TYPE_NUMERIC_ELIMINATIONS: any;
        readonly FIELD_TYPE_NUMERIC_SCORE: any;
        readonly FIELD_TYPE_TEXT: any;
        readonly FIELD_TYPE_TEXT_CENTERED: any;
        readonly FIELD_TYPE_TEXT_NICKNAME: any;
        readonly FIELD_WIDTH_AUTO: any;
        readonly ICON_ID_COIN: any;
        readonly ICON_ID_DEMOTE: any;
        readonly ICON_ID_ELIMINATE: any;
        readonly ICON_ID_KICK: any;
        readonly ICON_ID_PROMOTE: any;
        readonly ICON_ID_REPORT: any;
        readonly ICON_ID_SPECTATE: any;
    };
    
    /** unfinished */
    type pb2WindowLeaderboardInstance = pb2WindowInstanceBase<"pb2WindowLeaderboard"> & {
        round_time: unknown;
        round_time_max: unknown;
        players_max: unknown;
        fields: unknown;
        players: unknown;
        teams: unknown;
        my_player_id: unknown;
        my_spectated_id: unknown;
        graphs: unknown;
    };
}