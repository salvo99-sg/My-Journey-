import pathlib
PH = pathlib.Path("node_modules/@phosphor-icons/core/assets/duotone")
need = {"cr":"caret-right","cl":"caret-left","clock":"clock-countdown","plane":"airplane-tilt",
"cal":"calendar-dots","money":"money","backpack":"backpack","cam":"camera","users":"users",
"bed":"bed","food":"fork-knife","ticket":"ticket","sunrise":"sun-horizon","moon":"moon-stars",
"plus":"plus-circle","check":"check-circle","circle":"circle","map":"map-trifold",
"train":"train-simple","boat":"boat","sun":"sun"}
out=["// auto-generato: icone Phosphor duotone come stringhe SVG","import React from 'react';","",
"export const RAW: Record<string,string> = {"]
for k,v in need.items():
    svg=(PH/f"{v}-duotone.svg").read_text().strip().replace("\n"," ")
    svg=svg.replace('<svg ','<svg width="100%" height="100%" ',1)
    out.append(f"  {k}: `{svg}`,")
out.append("};")
out.append("""
export const Icon: React.FC<{n: string; s?: number; c?: string}> = ({n, s = 24, c}) => (
  <span
    style={{display:'inline-flex',width:s,height:s,color:c,flex:'none',verticalAlign:'-0.18em'}}
    dangerouslySetInnerHTML={{__html: RAW[n] || ''}}
  />
);
""")
pathlib.Path("src/Icons.tsx").write_text("\n".join(out))
print("Icons.tsx scritto,", len(need), "icone")
