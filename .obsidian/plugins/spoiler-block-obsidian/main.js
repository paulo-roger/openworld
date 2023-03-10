/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => SpoilerBlock
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var SpoilerBlock = class extends import_obsidian.Plugin {
  async onload() {
    console.log("reload");
    this.registerMarkdownCodeBlockProcessor("spoiler-block", (source, el, _) => {
      const container = el.createEl("div");
      container.className = "spoiler";
      const rows = source.split("\n");
      for (let row of rows)
        container.createEl("div", { text: row });
      container.addEventListener("click", () => {
        if (container.className === "spoiler")
          container.className = "spoiler-show";
      });
      container.addEventListener("dblclick", () => {
        if (container.className === "spoiler-show")
          container.className = "spoiler";
      });
    });
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgUGx1Z2luLCBNYXJrZG93blJlbmRlcmVyIH0gZnJvbSAnb2JzaWRpYW4nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3BvaWxlckJsb2NrIGV4dGVuZHMgUGx1Z2luIHtcclxuICBhc3luYyBvbmxvYWQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInJlbG9hZFwiKTtcclxuICAgIHRoaXMucmVnaXN0ZXJNYXJrZG93bkNvZGVCbG9ja1Byb2Nlc3NvcihcInNwb2lsZXItYmxvY2tcIiwgKHNvdXJjZSwgZWwsIF8pID0+IHtcclxuICAgICAgY29uc3QgY29udGFpbmVyID0gZWwuY3JlYXRlRWwoXCJkaXZcIik7XHJcbiAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNwb2lsZXJcIjtcclxuICAgICAgXHJcbiAgICAgIGNvbnN0IHJvd3MgPSBzb3VyY2Uuc3BsaXQoXCJcXG5cIik7XHJcbiAgICAgIGZvciAobGV0IHJvdyBvZiByb3dzKVxyXG4gICAgICAgIGNvbnRhaW5lci5jcmVhdGVFbChcImRpdlwiLCB7dGV4dDogcm93fSk7XHJcbiAgICAgIFxyXG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTmFtZSA9PT0gXCJzcG9pbGVyXCIpXHJcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJzcG9pbGVyLXNob3dcIjtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTmFtZSA9PT0gXCJzcG9pbGVyLXNob3dcIilcclxuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcInNwb2lsZXJcIjtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn0iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBQXlDO0FBRXpDLElBQXFCLGVBQXJCLGNBQTBDLHVCQUFPO0FBQUEsRUFDL0MsTUFBTSxTQUFTO0FBQ2IsWUFBUSxJQUFJLFFBQVE7QUFDcEIsU0FBSyxtQ0FBbUMsaUJBQWlCLENBQUMsUUFBUSxJQUFJLE1BQU07QUFDMUUsWUFBTSxZQUFZLEdBQUcsU0FBUyxLQUFLO0FBQ25DLGdCQUFVLFlBQVk7QUFFdEIsWUFBTSxPQUFPLE9BQU8sTUFBTSxJQUFJO0FBQzlCLGVBQVMsT0FBTztBQUNkLGtCQUFVLFNBQVMsT0FBTyxFQUFDLE1BQU0sSUFBRyxDQUFDO0FBRXZDLGdCQUFVLGlCQUFpQixTQUFTLE1BQU07QUFDeEMsWUFBSSxVQUFVLGNBQWM7QUFDMUIsb0JBQVUsWUFBWTtBQUFBLE1BQzFCLENBQUM7QUFFRCxnQkFBVSxpQkFBaUIsWUFBWSxNQUFNO0FBQzNDLFlBQUksVUFBVSxjQUFjO0FBQzFCLG9CQUFVLFlBQVk7QUFBQSxNQUMxQixDQUFDO0FBQUEsSUFDSCxDQUFDO0FBQUEsRUFDSDtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
