# Genera páginas SEO estáticas por categoría a partir de un template.
# Ejecutar desde la raíz del proyecto: powershell -File scripts/generate-category-pages.ps1
#
# Cada página resultante:
#  - Tiene SEO único (title, description, OG, canonical) por categoría
#  - Carga el chrome del sitio (header, footer)
#  - Renderiza el grid de productos filtrado por la categoría
#  - Tiene H1, intro y FAQ corta específicos
# Las páginas se generan en la raíz del proyecto y son auto-suficientes.

$root = Split-Path -Parent $PSScriptRoot
$tpl  = Get-Content (Join-Path $root "scripts/_template-categoria.html") -Raw

$categories = @(
  @{ slug="mates";        cat="todos";       title="Mates Artesanales Premium"; h1="Mates Artesanales Premium"; subtitle="Imperiales, torpedos, camioneros, de algarrobo y más. Diseños únicos en alpaca, bronce y maderas nobles."; intro="Descubrí nuestra colección completa de mates premium hechos a mano en Argentina. Cada pieza es única, con detalles cincelados y materiales de primera calidad." }
  @{ slug="termos";       cat="termos";      title="Termos Materos · Acero Inoxidable y Más"; h1="Termos para mate"; subtitle="Termos de acero inoxidable, con manija y sin manija. Cebado largo, mantenimiento térmico real."; intro="Termos materos pensados para el cebado: doble pared, retención térmica por horas y diseños cómodos para llevar a todos lados." }
  @{ slug="bombillas";    cat="bombillas";   title="Bombillas de Alpaca, Bronce y Acero"; h1="Bombillas para mate"; subtitle="Bombillas chatas, redondas, con pico Pico de Loro o gancho. Alpaca, bronce y acero quirúrgico."; intro="Encontrá la bombilla ideal para tu mate. Modelos artesanales con detalles, fáciles de limpiar y de uso duradero." }
  @{ slug="materas";      cat="materas";     title="Materas de Cuero · Para llevar tu mate"; h1="Materas y bolsos materos"; subtitle="Materas de cuero, con portatermo, portabombilla y portayerba. Diseños clásicos y modernos."; intro="Llevá tu mate, termo y yerba donde vayas. Materas de cuero argentino con compartimientos pensados para el matero exigente." }
  @{ slug="vasos";        cat="vasos";       title="Vasos Materos · Vidrio y Térmicos"; h1="Vasos para mate"; subtitle="Vasos materos clásicos, copitas y térmicos. Para los que prefieren un cebado distinto."; intro="Alternativa al mate tradicional: vasos térmicos y copitas con virola para una experiencia matera diferente." }
  @{ slug="yerbas";       cat="yerbas";      title="Yerba Mate Premium · Canarias, Rosamonte y más"; h1="Yerbas premium"; subtitle="Canarias, Rosamonte, Cruz de Malta y otras yerbas seleccionadas. Tradicionales y orgánicas."; intro="La yerba define el sabor de cada cebada. Te ofrecemos una selección de las mejores marcas argentinas, listas para enviarte a casa." }
  @{ slug="accesorios";   cat="accesorios";  title="Accesorios Materos · Yerbero, Azucarero y más"; h1="Accesorios materos"; subtitle="Yerberos, azucareros, virolas, dosificadores, bases, paños y todo lo que necesita un matero."; intro="Los detalles hacen al matero. Accesorios artesanales premium para potenciar tu ritual del mate todos los días." }
  @{ slug="asado";        cat="asado";       title="Sets de Asado · Tablas, Cuchillos y Cubiertos"; h1="Asado argentino premium"; subtitle="Tablas de algarrobo, cuchillos artesanales, sets de cubiertos y pinzas. Para los maestros del fuego."; intro="Productos premium para el asado argentino. Maderas nobles, hojas templadas y diseños hechos para durar generaciones." }
  @{ slug="grabados";     cat="grabados";    title="Grabados Personalizados en Mates y Tablas"; h1="Grabados personalizados"; subtitle="Grabamos nombres, frases, escudos de equipos y logos en mates, termos, tablas y cuchillos."; intro="El regalo perfecto para un matero o un cumpleaños distinto. Grabado láser de precisión sobre cuero, madera y metal." }
  @{ slug="combos";       cat="combos";      title="Combos Materos · Ahorrá comprando juntos"; h1="Combos premium"; subtitle="Combos mate + bombilla + termo + yerba a precios especiales. Ideales para regalo."; intro="Armamos combos pensados para arrancar de cero, regalar o renovar todo el equipo matero con un solo click." }
)

foreach ($c in $categories) {
  $html = $tpl `
    -replace '@@SLUG@@', $c.slug `
    -replace '@@CAT@@', $c.cat `
    -replace '@@TITLE@@', $c.title `
    -replace '@@H1@@', $c.h1 `
    -replace '@@SUBTITLE@@', $c.subtitle `
    -replace '@@INTRO@@', $c.intro
  $outPath = Join-Path $root ($c.slug + ".html")
  Set-Content -Path $outPath -Value $html -Encoding UTF8
  Write-Host "OK: $($c.slug).html"
}
