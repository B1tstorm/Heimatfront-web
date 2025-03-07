import { useState, useEffect, useCallback } from "react";
import { ServerInfoData, ServerInfoJson } from "@/app/battleMetricsTypes";

const serverIps: string[] = [
    "167.235.90.86",
    "176.9.114.132",
    "88.99.65.118",
];

export function useBattleMetricsAPI() {
    const [serverInfosData, setServerInfosData] = useState<ServerInfoData[]>([]);

    const fetchServerInfos = useCallback(async () => {
        const serverInfosResponse = await fetch(
            "https://api.battlemetrics.com/servers?filter[search]=Heimatfront"
        );
        const serverInfosJson: ServerInfoJson = await serverInfosResponse.json();
        const serverInfos: ServerInfoData[] = serverInfosJson.data;
        setServerInfosData(
            serverInfos.filter((serverInfo) =>
                serverIps.includes(serverInfo.attributes.ip)
            )
        );
    }, []);

    useEffect(() => {
        fetchServerInfos();
    }, [fetchServerInfos]);

    console.debug(serverInfosData);
    return { serverInfosData, refetchServerInfos: fetchServerInfos };
};
