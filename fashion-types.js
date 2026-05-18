const list = document.querySelector("#type-category-list");

function renderTypeCard(code) {
  const type = typeData[code];
  return `
    <a class="fashion-type-card" style="--type-color: ${getTypeColor(code)}" href="type-detail.html?type=${code}">
      <div class="fashion-type-card__visual">
        <img src="${type.image}" alt="${type.name}のキャラクター" loading="lazy" />
      </div>
      <div class="fashion-type-card__body">
        <small>${code}</small>
        <h3>${type.name}</h3>
        <p>${type.tagline}</p>
      </div>
    </a>
  `;
}

list.innerHTML = typeGroups
  .map(
    (group) => `
      <section class="panel type-category" style="--type-color: ${group.color}" aria-labelledby="${group.id}">
        <h2 id="${group.id}">${group.title}</h2>
        <p class="type-category__copy">${group.copy}</p>
        <div class="type-grid">
          ${group.codes.map(renderTypeCard).join("")}
        </div>
      </section>
    `,
  )
  .join("");
