import toast from "react-hot-toast";

export const copyToClipBoard = async (subDomain, shortUrl, setCopied) => {
	try {
		await navigator.clipboard.writeText(subDomain + shortUrl);
		toast.success("Copied to clipboard!");
		setCopied(shortUrl);
	} catch (error) {
		toast.error(error);
		setCopied("");
	}
};
