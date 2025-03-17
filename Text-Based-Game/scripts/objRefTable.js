const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Text,
		C3.Plugins.Sprite,
		C3.Plugins.Mouse,
		C3.Plugins.Flowchart,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.Flowchart.Acts.StartFlowchart,
		C3.Plugins.Flowchart.Cnds.OnAnyNodeChange,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Flowchart.Exps.OutputValue,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Mouse.Cnds.OnObjectClicked,
		C3.Plugins.Flowchart.Acts.GotoNextFlowchartNode
	];
};
self.C3_JsPropNameTable = [
	{TextForScene: 0},
	{PathA: 0},
	{PathB: 0},
	{BgImage: 0},
	{Mouse: 0},
	{FlowchartController: 0},
	{Text: 0},
	{BottomTexture: 0},
	{PathAtextbox: 0},
	{PathBtextbox: 0},
	{PathC: 0},
	{PathCtextbox: 0}
];

self.InstanceType = {
	TextForScene: class extends self.ITextInstance {},
	PathA: class extends self.ITextInstance {},
	PathB: class extends self.ITextInstance {},
	BgImage: class extends self.ISpriteInstance {},
	Mouse: class extends self.IInstance {},
	FlowchartController: class extends self.IInstance {},
	Text: class extends self.ITextInstance {},
	BottomTexture: class extends self.ISpriteInstance {},
	PathAtextbox: class extends self.ISpriteInstance {},
	PathBtextbox: class extends self.ISpriteInstance {},
	PathC: class extends self.ITextInstance {},
	PathCtextbox: class extends self.ISpriteInstance {}
}