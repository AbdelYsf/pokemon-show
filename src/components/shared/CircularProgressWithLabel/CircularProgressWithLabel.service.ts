import {MAX_STATS_VALUE} from "../../../utils/constant";

export const normalizePercentage = (value: number) => {
    return Math.round((value * 100) / MAX_STATS_VALUE)
}