import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

// Valid niches for URL params
const VALID_NICHES = ["fullstack", "agent", "realtime", "web3", "creative"];
const DEFAULT_NICHES = ["fullstack", "agent"]; // Default view prioritizes Full Stack + Agent

/**
 * Custom hook to read niche filter from URL params
 * @returns {Object} { niche, isFiltered, matchesNiche }
 */
export function useNicheFilter() {
    const [searchParams] = useSearchParams();

    const niche = useMemo(() => {
        const param = searchParams.get("niche");
        if (param && VALID_NICHES.includes(param)) {
            return param;
        }
        return null;
    }, [searchParams]);

    const isFiltered = niche !== null;

    /**
     * Check if an item matches the current filter
     * @param {string[]} itemNiches - Array of niches the item belongs to
     * @returns {boolean}
     */
    const matchesNiche = (itemNiches) => {
        if (!itemNiches || !Array.isArray(itemNiches)) return false;

        if (niche) {
            // Explicit niche filter
            return itemNiches.includes(niche);
        }

        // Default: show items that match any of the default niches
        return itemNiches.some((n) => DEFAULT_NICHES.includes(n));
    };

    /**
     * Check if item should be prioritized (matches default niches)
     * @param {string[]} itemNiches
     * @returns {boolean}
     */
    const isPrioritized = (itemNiches) => {
        if (!itemNiches || !Array.isArray(itemNiches)) return false;
        return itemNiches.some((n) => DEFAULT_NICHES.includes(n));
    };

    return {
        niche,
        isFiltered,
        matchesNiche,
        isPrioritized,
        validNiches: VALID_NICHES,
        defaultNiches: DEFAULT_NICHES,
    };
}

export default useNicheFilter;
