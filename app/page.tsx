import { getBrands } from "@/lib/registry";

export default async function Home() {
  const brands = await getBrands();

  return (
    <main>
      <div className="container">
        <section className="hero">
          <p className="eyebrow">Source-backed brand colours</p>
          <h1>Brand Registry</h1>
          <p className="lede">
            Searchable, versioned, export-ready brand colour data with source confidence, freshness checks, and agent-assisted research workflows.
          </p>
          <div className="actions">
            <a className="button" href="https://github.com/SmolSoftBoi/brand-registry">
              View registry
            </a>
            <a className="button secondary" href="https://github.com/SmolSoftBoi/brand-registry-web">
              View web app
            </a>
          </div>
        </section>

        <section className="grid" aria-label="Brand records">
          {brands.map((brand) => (
            <article className="card" key={brand.slug}>
              <h2>{brand.name}</h2>
              <p className="meta">
                {brand.status} · {brand.lastVerifiedAt ?? brand.lastCheckedAt ?? "not checked"}
              </p>
              <div className="swatches" aria-label={`${brand.name} colour swatches`}>
                {brand.colours.map((colour) => (
                  <div
                    className="swatch"
                    key={`${brand.slug}-${colour.hex}-${colour.name}`}
                    title={`${colour.name}: ${colour.hex}`}
                    style={{ background: colour.hex }}
                  />
                ))}
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
