import React, { useState } from "react";
import MyUrlItem from "./MyUrlItem";
import { UrlListSkeleton } from "./Spinner";

const MyUrlsShorten = ({ data, isPending }) => {
	const [selected, setSelected] = useState("");
	const [copied, setCopied] = useState("");
	return (
		<div>
			{isPending && <UrlListSkeleton />}
			{data?.map((item) => (
				<MyUrlItem key={item.id} {...item} selected={selected} setSelected={setSelected} copied={copied} setCopied={setCopied} />
			))}
		</div>
	);
};

export default MyUrlsShorten;
