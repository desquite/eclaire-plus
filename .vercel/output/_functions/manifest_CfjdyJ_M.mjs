import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_CzcP1_xN.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_B_J5Mm7m.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/desquite.assi/eclaire-plus/app/","cacheDir":"file:///C:/Users/desquite.assi/eclaire-plus/app/node_modules/.astro/","outDir":"file:///C:/Users/desquite.assi/eclaire-plus/app/dist/","srcDir":"file:///C:/Users/desquite.assi/eclaire-plus/app/src/","publicDir":"file:///C:/Users/desquite.assi/eclaire-plus/app/public/","buildClientDir":"file:///C:/Users/desquite.assi/eclaire-plus/app/dist/client/","buildServerDir":"file:///C:/Users/desquite.assi/eclaire-plus/app/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DOljafSr.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"galerie/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DOljafSr.css"}],"routeData":{"route":"/galerie","isIndex":false,"type":"page","pattern":"^\\/galerie\\/?$","segments":[[{"content":"galerie","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/galerie.astro","pathname":"/galerie","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DOljafSr.css"}],"routeData":{"route":"/services","isIndex":true,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/index.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/contact.DOljafSr.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.ts","pathname":"/api/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/desquite.assi/eclaire-plus/app/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/desquite.assi/eclaire-plus/app/src/pages/galerie.astro",{"propagation":"none","containsHead":true}],["C:/Users/desquite.assi/eclaire-plus/app/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/desquite.assi/eclaire-plus/app/src/pages/services/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/desquite.assi/eclaire-plus/app/src/pages/services/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astro-page:src/pages/api/contact@_@ts":"pages/api/contact.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/galerie@_@astro":"pages/galerie.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/services/[slug]@_@astro":"pages/services/_slug_.astro.mjs","\u0000@astro-page:src/pages/services/index@_@astro":"pages/services.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CfjdyJ_M.mjs","C:/Users/desquite.assi/eclaire-plus/app/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp__ne219Hb.mjs","C:/Users/desquite.assi/eclaire-plus/app/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.CwOLCHjG.js","C:/Users/desquite.assi/eclaire-plus/app/src/pages/contact.astro?astro&type=script&index=0&lang.ts":"_astro/contact.astro_astro_type_script_index_0_lang.BEZr3gOo.js","C:/Users/desquite.assi/eclaire-plus/app/src/pages/galerie.astro?astro&type=script&index=0&lang.ts":"_astro/galerie.astro_astro_type_script_index_0_lang.DvSNZ9oP.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/Users/desquite.assi/eclaire-plus/app/src/components/Header.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"mobile-menu-toggle\"),t=document.getElementById(\"mobile-menu\");e?.addEventListener(\"click\",()=>t?.classList.toggle(\"hidden\"));"],["C:/Users/desquite.assi/eclaire-plus/app/src/pages/contact.astro?astro&type=script&index=0&lang.ts","const s=document.getElementById(\"contact-form\"),o=document.getElementById(\"submit-btn\"),t=document.getElementById(\"form-result\"),l=o?.querySelector('[data-state=\"idle\"]'),m=o?.querySelector('[data-state=\"loading\"]'),n=(e,a)=>{t&&(t.textContent=a,t.className=e?\"p-4 rounded-md text-sm bg-green-50 text-green-800 border border-green-200\":\"p-4 rounded-md text-sm bg-red-50 text-red-800 border border-red-200\")},i=e=>{o&&(o.disabled=e,l?.classList.toggle(\"hidden\",e),m?.classList.toggle(\"hidden\",!e))};s?.addEventListener(\"submit\",async e=>{if(e.preventDefault(),!s.checkValidity()){s.reportValidity();return}const a=new FormData(s),c=Object.fromEntries(a.entries());i(!0),n(!0,\"\"),t?.classList.add(\"hidden\");try{const r=await fetch(\"/api/contact\",{method:\"POST\",headers:{\"Content-Type\":\"application/json\"},body:JSON.stringify(c)}),d=await r.json().catch(()=>({ok:!1,message:\"Réponse serveur invalide.\"}));t?.classList.remove(\"hidden\"),r.ok&&d.ok?(n(!0,d.message||\"Votre demande a bien été envoyée.\"),s.reset()):n(!1,d.message||`Erreur (HTTP ${r.status}).`)}catch{t?.classList.remove(\"hidden\"),n(!1,\"Impossible de joindre le serveur. Vérifiez votre connexion.\")}finally{i(!1)}});"],["C:/Users/desquite.assi/eclaire-plus/app/src/pages/galerie.astro?astro&type=script&index=0&lang.ts","const r=document.querySelectorAll(\".gallery-filter\"),l=document.querySelectorAll(\".gallery-item\");r.forEach(e=>{e.addEventListener(\"click\",()=>{r.forEach(t=>{t.classList.remove(\"bg-brand-red\",\"text-white\"),t.classList.add(\"bg-gray-100\",\"text-brand-navy\")}),e.classList.remove(\"bg-gray-100\",\"text-brand-navy\"),e.classList.add(\"bg-brand-red\",\"text-white\");const a=e.dataset.filter;l.forEach(t=>{const s=t;s.style.display=a===\"Tous\"||s.dataset.tag===a?\"\":\"none\"})})});"]],"assets":["/_astro/contact.DOljafSr.css","/favicon.ico","/fonts/air-conditioner.png","/fonts/cctv.png","/fonts/crane.png","/fonts/flash.png","/fonts/plumber.png","/fonts/science.png","/img/banner-bg.jpg","/img/contact-info-bg.jpg","/img/counter-bg.jpg","/img/favicon.png","/img/feathers-bg.jpg","/img/logonotext.png","/img/partner-bg.jpg","/img/price-bg.jpg","/img/subscribe-bg.jpg","/img/hero-slider-img/hero-slider-img-3.jpg","/img/hero-slider-img/hero-slider-img-4.jpg","/img/hero-slider-img/slide1.jpg","/img/hero-slider-img/slide2.webp","/img/testimonials-img/testimonials-img-bg.jpg","/contact/index.html","/galerie/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"dVTZZ0lnA88I5fZdLPm32FTefOR6j/WyBMWpg24Zhg0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
