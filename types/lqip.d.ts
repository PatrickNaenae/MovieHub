declare module "lqip-modern" {
	interface LqipResult {
		metadata: {
			type: string;
		};
		base64data: string;
	}

	function lqip(src: string): Promise<LqipResult>;

	export default lqip;
}
