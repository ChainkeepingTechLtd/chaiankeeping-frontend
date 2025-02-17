import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchParam {
    name: string;
    value: string;
}

const useCreateSearchQuery = () => {
    const { push } = useRouter();
    
    const searchParams = useSearchParams();

    const pathname = usePathname();

    const [queryParams, setQueryParams] = useState(
        new URLSearchParams(searchParams)
    );

    const createSearchParams = ({
        param,
        url,
        replaceUrl = false,
    }: {
        param: SearchParam | SearchParam[];
        url?: string;
        replaceUrl?: boolean;
    }) => {
        const newParams = new URLSearchParams(queryParams);

        if (Array.isArray(param)) {
            param.forEach((p) => {
                newParams.set(p.name, p.value);
            });
        } else {
            newParams.set(param.name, param.value);
        }

        setQueryParams(newParams);

        // Update URL without page reload using replaceState or pushState
        const method = replaceUrl ? "replaceState" : "pushState";
        if (url) {
            push(`${url}?${newParams.toString()}`);
        } else {
            window.history[method]({}, "", `${pathname}?${newParams.toString()}`);
        }
    };

    return { searchParams: searchParams, createSearchParams };
};

export { useCreateSearchQuery }