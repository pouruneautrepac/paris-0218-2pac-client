import React from 'react'
import './Content.css'
import Container from '../Container'

const BilanActuel = ({children}) => {
  return (
    <div>
      <Container>
        <div class="fix-content-article">
        <h1>Bilan de l'actuelle PAC</h1>
        <br/>
        <p>La Politique Agricole Commune (PAC) 2015-2020 a manqué sa cible. Elle était annoncée comme plus verte et plus juste, mais elle n’a en réalité pas changé de cap ni arrêté les fortes pressions sur la nature et les paysans. En effet, la PAC 2015-2020 s’est illustrée par le maintien d’un soutien public massif au profit de l’agriculture agro-industrielle. En France, la confiance des agriculteurs en cette politique a été profondément ébranlée par son incohérence, sa complexité et surtout, par l’instabilité des dispositifs et de leurs dotations budgétaires.
          <i>Pour une autre PAC</i> revient, enjeu par enjeu, sur les forces et les lacunes de la PAC actuelle.</p>
          <br/>

        <p><h2>Une politique publique coûteuse et mal répartie</h2></p>
        <br/>
        <p>&emsp;&emsp;&emsp;À l’instar de ses précédentes versions, la PAC 2015-2020 n’a répondu ni aux besoins des petites fermes ou de celles diversifiées, ni aux attentes de la société civile. Pour autant, elle constitue un poste de dépense important pour l’argent public européen. En effet, le budget de la PAC 2015-2020 en France (hors co-financement) s’élève à environ 56 milliards €. Si des besoins aussi fondamentaux que ceux auxquels répond la politique agricole et alimentaire appellent bien à d’importants soutiens financiers de la part des États, il n’est en revanche pas justifié que cet argent soit très inégalement réparti entre ses bénéficiaires.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Aujourd’hui, les principaux bénéficiaires de la PAC demeurent les producteurs intégrés dans un modèle de type agro-industriel. Les autres, quand bien même ils perçoivent eux aussi un peu d’aide, peinent à résister à la concurrence des agriculteurs touchant plus de 50000€ de subventions par an. À titre d’illustration, il n’y a pas de conditionnement des aides au respect de la règlementation sociale censée s’appliquer aux travailleurs agricoles. En France, il n’existe pas non plus de plafonnement du montant des aides qu’une seule ferme ni qu’un seul agriculteur peut toucher, ce qui génère des rentes de situations et invite à la course à l’agrandissement. Ce phénomène est d’autant plus néfaste en zones de montagne, où l’actuelle PAC a déclenché une appétence pour l’agrandissement dont elle était jusqu’alors préservée. A l’inverse, les petites fermes doivent atteindre des volumes de production ou des seuils de surfaces pour pouvoir prétendre aux aides. De plus, la France a choisi de ne pas mettre en œuvre un schéma dédié aux petites fermes, qui les aurait pourtant, pour une partie d’entre elles, allégées des contraintes administratives et d’éligibilité auxquelles elles doivent se plier.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Par ailleurs, la PAC, dont l’objectif premier affiché est d’offrir un revenu aux paysans européens, ne parvient pas non plus à atteindre ce but. Le montant des aides de base, attribuées selon la surface des fermes et appelées paiements découplés, n’est pas le même d’une ferme à l’autre : il peut varier du simple au double entre une région traditionnellement orientée vers la culture de céréales et une région de pastoralisme. Pire, certaines surfaces pastorales ne sont parfois pas du tout éligibles aux aides de la PAC. Pour autant, la réforme de 2015-2020 s’est attaquée à ce problème en faisant converger la valeur de ces aides vers un montant moyen pour toute la France. L’initiative, absolument indispensable, aurait toutefois dû aller plus loin en atteignant un montant unique pour toutes les fermes en 2020, au lieu de simplement viser à réduire l’écart entre les hectares les moins bien et les mieux dotés. De même, afin de préserver le modèle agricole français reposant sur des fermes de taille limitée, les 52 premiers hectares d’une ferme sont valorisés par une bonification des paiements découplés ; l’effet de ce mécanisme judicieux, dit paiement redistributif, aurait là encore pu être renforcé si la France lui avait octroyé la part maximale du budget autorisée par l’UE.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Alors que l’UE n’est pas sans savoir que ses citoyens demandent de plus en plus à s’impliquer dans la définition des politiques ayant un impact sur leur alimentation, leur environnement et leur santé, la PAC 2015-2020 n’a pas pris le virage de l’ouverture à la société civile. La demande citoyenne de responsabilité à l’égard des générations futures n’est pas entendue par la PAC : celle-ci ne répond pas suffisamment à l’impératif de restauration et de préservation des ressources naturelles. Autrement dit, elle ne garantit pas la pérennité des facteurs de la production agricole, ce qui compromet la capacité de l’UE à assurer sa souveraineté alimentaire.</p>
        <br/>
        <p><h2>L’agriculture pensée sans l’alimentation</h2></p>
        <br/>
        <p>&emsp;&emsp;&emsp;L’UE est dotée d’une politique agricole commune, mais pas d’une politique alimentaire. La PAC est conçue pour la production, et non pour des filières territorialisées de transformation ou de vente, ni pour la consommation. Or, la déconnexion entre l’amont et le reste de la filière pose problème : les agriculteurs européens sont orientés vers des pratiques, des modèles ou des productions ne répondant pas à la demande des « mangeurs », sensibles à la qualité, au goût, à la typicité, à l’équilibre et à l’éthique de leur alimentation. Par conséquent, le contribuable européen subventionne partiellement une production qui ne le sert pas.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Autrement dit, la PAC subventionne une production de masse répondant à l’exigence de compétitivité de l’agro-alimentaire, et non une production qualitative satisfaisant les besoins alimentaires des citoyens européens. On constate ainsi que les fruits destinés à la transformation industrielle, ou les protéines végétales pour l’alimentation du bétail, bénéficient de soutiens spécifiques, contrairement aux fruits et légumes frais, ou aux légumineuses pour la consommation humaine. En ceci, l’orientation actuelle de la PAC constitue un manquement par rapport à l’objectif de sécurité alimentaire de la population européenne que lui confient les traités européens.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Autre aspect de l’alimentation vers lequel la PAC peine à orienter : la relocalisation et la diversification des productions alimentaires au sein des territoires. Les aides à l’investissement peuvent servir ces deux objectifs, car elles constituent un outil intéressant pour accompagner la transition et l’autonomisation des fermes, via notamment la déspécialisation et la création d’ateliers de transformation. Pourtant, les critères de sélection de ces aides favorisent davantage la fuite en avant de l’agriculture, vers toujours plus d’endettement et de productivité par actif, c’est-à-dire vers des projets coûteux de technologisation et de robotisation (par exemple, un robot de traite), plutôt que de conforter ceux améliorant la souveraineté alimentaire et l’autonomie des territoires (par exemple, la fabrication de yaourts à la ferme).</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Il existe dans la PAC quelques très rares dispositifs ayant une portée alimentaire directe, mais ils représentent une portion insignifiante du budget de la politique. Par exemple, l’UE accorde 150 millions € par an au programme « lait et fruits à l’école », soit 0,003% du budget annuel de la PAC... Elle accorde également un soutien à des programmes de promotion de certains secteurs agro-alimentaires, visant la création de nouveaux marchés, y compris en dehors de l’UE, pour des produits à l’intérêt nutritionnel discuté. Enfin, la PAC ne prévoit rien pour fournir un accès à une alimentation de qualité aux populations les plus démunies, pour garantir une éducation alimentaire systématique aux jeunes Européens, ni pour lutter contre le gaspillage alimentaire.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Même la santé du consommateur n’est pas pleinement prise en considération par la PAC. Cette dernière impose certes des normes de production sanitaires strictes, d’ailleurs inadaptées pour l’agriculture paysanne, mais elle n’est pas à l’écoute des attentes sociétales sur les risques liés à l’inhalation et l’ingestion de pesticides ou d’engrais azotés. La PAC ne propose en effet aucun outil de franche incitation à la réduction de leur usage. Les deux seuls dispositifs qui font écho à cette idée, à savoir les mesures agro-environnementales et climatiques (MAEC) et les aides à l’agriculture biologique, sont les premiers à servir de variable d’ajustement face à l’insuffisance des dotations budgétaires. La qualité de l’alimentation européenne n’est donc pour l’instant pas mesurée à l’aune des critères que les citoyens aimeraient voir pris en compte.</p>
        <br/>
        <p><h2>Dérégulation des échanges internationaux au détriment du développement des agricultures des pays du Sud</h2></p>
        <br/>
        <p>&emsp;&emsp;&emsp;La réforme 2015-2020 a très nettement poursuivi l’orientation libérale de la PAC amorcée depuis 1992. L’un des trois axes de la PAC, et le plus intégré des trois, à savoir l’organisation commune des marchés (OCM), a été révisé de telle sorte que toute ambition de régulation des marchés et de protection efficace des paysans européens contre la volatilité des marchés a été enterrée. L’UE a par exemple supprimé les quotas sur le lait et le sucre, qui maintenaient jusqu’alors une maîtrise des volumes de production. Cela signifie qu’elle a ouvert la porte à une production de masse, menant à la surproduction. Pour faire face à cette situation, le contribuable européen doit financer le stockage des denrées en surplus et les populations des pays tiers subir la déstabilisation de leurs marchés locaux par l’arrivée massive de produits européens exportés à bas prix. Ainsi, la révision de l’OCM a contribué à détruire la paysannerie aussi bien au sein de l’UE que dans les pays en développement.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;De surcroît, d’autres axes de la PAC se traduisent par le même effet. Il en va de la sorte pour une partie des aides à l’investissement, qui encouragent le modèle agro-industriel tourné vers l’exportation et le gain de parts de marché à l’international. De même, les aides de base de la PAC, consistant en l’attribution d’un montant forfaitaire d’aide à l’hectare, constituent une subvention déguisée lorsque les produits qui en bénéficient entrent sur le marché mondial : ils concurrencent alors de manière déloyale les produits similaires non subventionnés et tirent le cours des marchés vers le bas. On peut donc dire que des milliards d’euros du budget européen sortent chaque année des frontières de l’UE pour d’une part, affaiblir la souveraineté alimentaire des pays en développement et d’autre part, nuire à la propre capacité des paysans européens à tirer un revenu décent de leurs prix de vente.</p>
        <br/>
        <p>Officiellement, la PAC est annoncée comme compatible avec le développement des agricultures des pays du Sud. Toutefois, l’UE ne réalise aucune étude d’impact mesurant véritablement les effets de sa politique sur les pays en développement. On l’a vu, la réalité des exportations européennes tend à prouver le contraire. Or, le même constat peut être tiré pour les importations. Puisque les critères d’octroi des aides de la PAC n’incitent pas les agriculteurs européens à développer les productions pour lesquelles l’UE est loin d’être autosuffisante, la PAC n’agit pas sur la réduction de la dépendance de l’Europe aux importations de cultures déficitaires, telles que les protéines végétales (majoritairement, du soja) destinées à l’alimentation des animaux d’élevage. Par ce biais, l’UE a une responsabilité dans les dégâts sociaux et environnementaux causés par la production de ce qu’elle importe des pays du Sud : déforestation, dégradation de la fertilité des sols, exploitation humaine, etc.</p>
        <br/>
        <p><h2>Un manque cruel d’incitation à la transition vers l’agroécologie</h2></p>
        <br/>
        <p>&emsp;&emsp;&emsp;Parce qu’elle n’a pas changé la vision du système qu’elle promeut, la PAC 2015-2020 continue de nourrir et d’entretenir artificiellement un modèle agro-alimentaire non durable. Cela s’illustre par trois biais différents. Premièrement, la part du budget alloué aux aides non conformes à des pratiques agricoles durables demeure bien supérieure aux soutiens favorables à l’emploi, à l’environnement, à la biodiversité ou à la lutte contre les changements climatiques. Les paiements directs accaparent à eux seules 82% du budget, si bien que moins de 15% du financement de la PAC s’adresse finalement à des pratiques réputées vertueuses pour l’environnement.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Deuxièmement, l’innovation majeure de la réforme de 2015 concernant le « verdissement » de la PAC s’est révélée totalement inefficace. Elle a constitué en l’introduction d’un paiement vert soumis au respect de critères sanctionnant des pratiques censément respectueuses de l’environnement. Dans les faits, comme l’a montré un audit de la Cour des comptes de l’UE du 12 décembre 2017, ce dispositif n’a entrainé aucune évolution dans les pratiques agricoles. En effet, les règles de ce « verdissement » ont été définies selon les pratiques déjà en vigueur, s’assurant de la sorte qu’aucun changement n’ait besoin d’être mis en place. On constate que les mesures censées protéger les prairies permanentes et les haies n’ont pas été efficaces pour leur préservation. Certains critères ou certaines dérogations accordées ont carrément un effet néfaste sur l’environnement, comme l’autorisation d’épandre des pesticides sur des surfaces dites d’intérêt écologique ou pire encore, l’exemption de diversité des cultures pour la monoculture de maïs.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Troisièmement, les trop rares mesures ciblant des systèmes écologiquement vertueux, ou favorisant la mise en place de nouvelles pratiques moins néfastes, souffrent de plusieurs écueils, alors même qu’elles pourraient constituer des leviers intéressants pour la transition agroécologique des fermes européennes. Il s’agit des aides à la conversion et au maintien en agriculture biologique (CAB et MAB), des mesures agro-environnementales et climatiques (MAEC), ainsi que de l’indemnité compensatoire de handicaps naturels (ICHN). Tout d’abord, ces aides ne sont, par principe, pas accessibles à tous les paysans (à l’exception de la CAB) et relèvent d’initiatives individuelles volontaires, si bien qu’elles ne sont pas en mesure d’entrainer un changement massif du système agro-alimentaire européen. Ensuite, en France, elles sont toutes insuffisamment dotées par rapport au nombre d’agriculteurs qui les sollicitent. Elles bénéficient de surcroit d’un co-financement variant d’une région à l’autre. La période 2015-2020 aura été particulièrement marquée par les retards dans le versement de ces aides aux agriculteurs, ainsi que par la baisse de leur dotation en cours de programmation, voire le retrait de l’engagement de l’État à les financer. Pour finir, la logique de conception des MAEC manque sur plusieurs aspects de pertinence : y souscrire est extrêmement compliqué, leur zonage exclue une partie du territoire français, elles peuvent entrer en concurrence entre elles et sont calculées selon un manque à gagner, plutôt que selon une rémunération des externalités positives générées.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;En résumé, malgré les milliards d’euros distribués, la PAC 2015-2020 ne propose ni d’injonction ni d’incitation suffisantes à l’évolution du modèle agro-industriel dominant, vers une agriculture paysanne, respectueuse de l’environnement et du bien-être animal. Pire, en continuant à attribuer un financement généreux aux exploitations agricoles non durables, elle les invite directement à maintenir leurs pratiques néfastes pour la biodiversité, la qualité de l’air, de l’eau et des sols. Or, la non durabilité de ces pratiques s’applique en réalité aussi à la pérennité même des fermes concernées, dans la mesure où elles doivent dans tous les cas faire face à des risques climatiques et sanitaires d’ampleur et de fréquence croissantes.</p>
        <br/>
        <p><h2>Une PAC conçue comme aide à la survie et non comme accompagnement vers la résilience</h2></p>
        <br/>
        <p>&emsp;&emsp;&emsp;C’est le rôle de la politique agricole que d’aider les agriculteurs à se prémunir face aux trois types d’aléas auxquels leur activité est par essence soumise : économique, sanitaire et climatique. Ceci étant dit, la politique n’a pas à servir de filet de sécurité aux agriculteurs sans considération pour les risques qu’ils prennent. A l’inverse, elle ne devrait pas les exposer à des aléas contre lesquels il est en son pouvoir de les protéger. Les risques économiques relèvent majoritairement de cette seconde catégorie : les paysans européens subissent à la fois une pression pour vendre leurs produits à des prix toujours plus bas, parfois même en deçà de leurs coûts de production, et l’instabilité des prix fixés par le marché. C’est la dérégulation de la production européenne et l’orientation de marché décidées par la PAC, et notamment par la révision de l’organisation communes des marchés, qui sont responsables de cette situation. L’UE s’est pourtant bien dotée d’une réserve de crise, fonds qui était prévu pour être mobilisé en cas de perturbation des marchés, mais dans la pratique, elle n’a jamais été sollicitée faute d’adaptation de son mécanisme de déclenchement au système décisionnel européen, alors que les crises se sont multipliées ces dernières années. En clair, la réforme de 2015 soumet davantage les agriculteurs à un risque face auquel l’intervention publique est justement la seule à pouvoir agir.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Par ailleurs, un des freins majeurs à la résilience des fermes est l’hyperspécialisation, qui est incompatible avec la prévention des risques ou à leur adaptation. Or, les modalités actuelles d’attribution des aides de la PAC n’envoient pas de réel message favorisant la déspécialisation des territoires, la diversification au sein de chaque exploitation et l’autonomie des fermes. La PAC actuelle ne valorise pas les fermes résilientes, alors qu’elle couvre celles qui le sont moins. Ce phénomène est très bien illustré par l’aide au financement d’une assurance récolte au travers du deuxième pilier, par laquelle l’argent public sert à payer des compagnies d’assurance privée. Ce mécanisme scandaleux inflige une double peine à l’agriculture européenne. D’une part, avec lui s’est ouvert un gouffre financier qui absorbe une part croissante du budget de la PAC, privant de la sorte les rares dispositifs pertinents (aides bio, ICHN, MAEC) de financement et d’autre part, il dispense totalement les agriculteurs de modifier leur système, dans la mesure où leur couverture par l’assurance est activée quel que soit le niveau de durabilité de leurs pratiques.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;On le voit, l’incitation va franchement même dans le sens inverse à un gain de résilience : la PAC mène les agriculteurs vers une dépendance accrue à des facteurs ou prestataires externes. En effet, l’absence de plafonnement des aides pousse les agriculteurs à agrandir leur ferme, dont la gestion par un nombre très limité d’actifs n’est alors plus possible que par une course à la productivité, incompatible avec une baisse de l’usage des produits phytosanitaires, la diversité et la complémentarité des ateliers, une attention portée sur chaque animal individuellement, etc. De plus, les types d’investissements vers lesquels sont fléchées les aides dédiées favorisent des endettements lourds ; les jeunes agriculteurs sont même soutenus proportionnellement à leur niveau d’investissement. Ainsi, les critères sur lesquels se base l’attribution des aides de la PAC accroissent la dépendance des agriculteurs aux banques, aux entreprises de machinisme agricole, aux fournisseurs d’intrants chimiques, aux achats externes d’aliments pour le bétail ou de semences. Par conséquent, les paysans ne sont plus maitres de leur ferme et n’ont plus la latitude ou le savoir-faire pour adapter leurs modes ou leurs coûts de production face à des aléas économiques, sanitaires ou climatiques.</p>
        <br/>
        <p><h2>Des aides au développement rural louables, mais ne faisant pas le poids face au 1er pilier</h2></p>
        <br/>
        <p>&emsp;&emsp;&emsp;La PAC 2015-2020 a maintenu une structure en deux piliers, au sein de laquelle le premier pilier est dédié aux aides au revenu (obligatoires et totalement financées par le budget européen), alors que le deuxième pilier porte sur le soutien au développement rural, par des dispositifs facultatifs et requérant un cofinancement de la part des États membres. En France, le déséquilibre budgétaire entre les deux piliers de la PAC est tel que le premier est cinq fois mieux doté que le second. Pourtant, ce dernier cible bien mieux les types de ferme ou de pratiques qui justifient un soutien public : contrairement aux aides du premier pilier, celles du deuxième (à l’exception de l’assurance récolte et d’une partie des aides à l’investissement) sont cohérentes et conditionnées, à l’instar des MAEC et des aides bio. La réforme de 2015 n’a donc pas pallié le manque de complémentarité entre les deux piliers, puisque le second demeure principalement un faible moyen de réparer les dégâts causés par la logique du premier.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;L’emploi dans les campagnes constitue un des enjeux clefs du développement rural, et en particulier la démultiplication des actifs agricoles. Certes, la politique de développement rural de l’UE inclut un soutien spécifique pour l’installation de jeunes agriculteurs, indispensable au renouvellement générationnel des paysans européens. Mais les critères de cette aide excluent de fait une majorité des installations réalisées, car ils ne sont pas adaptés à la diversité des porteurs de projet et des types de fermes potentiellement concernés. De plus, les référentiels utilisés pour accompagner les futurs installés sont parfois inadaptés aux projets en agroécologie. En outre, cette mesure n’est complétée ni par un dispositif en faveur de la transmission des fermes, ni de la recherche de foncier, si bien qu’elle ne traite en réalité que d’une partie du problème. Par ailleurs, la logique d’intervention du premier pilier rend presque vain tout effort en faveur de l’emploi agricole, dans la mesure où l’attribution des aides directes à la surface et non à l’actif, ainsi que l’absence de leur plafonnement par actif, entrainent l’agrandissement de fermes, qui deviennent difficilement transmissibles, plutôt que la création de nouvelles.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Le deuxième pilier est également l’outil par lequel des défis spécifiques peuvent être abordés. Cela s’illustre par exemple par l’indemnité compensatoire de handicaps naturels (ICHN), destinée aux exploitations dont l’implantation géographique les soumet à des contraintes de production particulières. Au sein de la PAC 2015-2020, la France a associé l’obtention de cette aide à des critères d’éligibilité très pertinents (prise en compte du revenu global de l’agriculteur, plafonnement). Mais l’ICHN se trouve dans le collimateur de la Commission européenne depuis le début de la programmation, car elle rejette le principe de discrimination positive de certaines fermes, qui créerait selon elle une distorsion de concurrence entre celles situées en zones ICHN et les autres. En d’autres termes, cela signifie que l’UE considère que la politique de développement rural n’a pas vocation à cibler les fermes qui génèrent le plus d’aménités pour le milieu rural, alors que ce devrait précisément être là son objet !</p>
        <br/>
        <p>&emsp;&emsp;&emsp;La France a fait le choix de ne pas ouvrir, ou de très faiblement doter, certains des dispositifs possibles dans le cadre du deuxième pilier de la PAC, dispositifs qui répondaient pourtant à des enjeux importants et non traités par d’autres outils de la PAC. Il en va de la sorte pour les mesures en faveur du bien-être animal. Les citoyens européens sont de plus en plus sensibles au respect de conditions d’élevage dignes. Néanmoins, la France n’a pas jugé prioritaire d’allouer du budget pour inciter les éleveurs à adopter des modes d’élevage améliorant le cadre et les conditions de vie des animaux. Ce choix est d’autant plus regrettable que le soutien massif à l’élevage, via les aides couplées dans le cadre du premier pilier, n’est pas conditionné à l’adoption de pratiques d’élevage compatibles avec les besoins et comportements naturels des animaux. Le constat est similaire pour la mesure « coopération », qui n’a pas été rendue obligatoire dans les programmes de développement rural régionaux, alors qu’elle représentait un levier intéressant pour favoriser la mise en place de démarches collectives associant paysans et autres acteurs d’un même territoire. Ces deux exemples d’enjeux très insuffisamment pris en compte par l’actuelle PAC correspondent pourtant à l’essence même de ce que devrait viser une politique de développement rural pertinente. </p>
        <br/>
        <p><h2>Une nouvelle gouvernance insuffisamment transparente et préparée</h2></p>
        <br/>
        <p>&emsp;&emsp;&emsp;Comme évoqué précédemment, la PAC actuelle a maintenu l’architecture en deux piliers, ce qui conduit à cette absurdité que les mesures judicieuses doivent être cofinancées par les États membres, tandis que celles moins pertinentes sont financées à 100% par le budget européen. En revanche, elle a introduit une nouveauté importance en matière de gouvernance. La PAC 2015-2020 a fait plus que jamais usage de la subsidiarité, c’est-à-dire de la latitude laissée aux États membres d’adapter les décisions européennes aux priorités nationales. Or, cette subsidiarité a été utilisée à mauvais escient, puisqu’elle a principalement servi à diluer la portée des ambitions européennes, que ce soit en matière environnementale ou sociale.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Par ailleurs, la réforme de la PAC s’est accompagnée en France d’une nouvelle gouvernance : la gestion du deuxième pilier a été transférée aux Conseils régionaux. Si la décentralisation d’une partie de la mise en œuvre de la PAC est une initiative bienvenue pour s’adapter aux réalités de chaque bassin de production, la fusion des Régions intervenues entre temps a contredit cet objectif. Ce transfert de l’autorité de gestion a été réalisé sans que les Régions n’y soient prêtes en termes de compétences et moyens humains. De plus, s’il était nécessaire d’imposer un cadre national à toutes les Régions afin de garantir une égalité de traitement aux paysans français, le cadrage national a été source d’une grande complexité et d’incohérence dans la rédaction des plans de développement rural régionaux : il a imposé des mesures ainsi que des critères priorisant des types d’agriculture non durables. En outre, trop peu de garde-fous ont été en réalité appliqués pour limiter les disparités entre les Régions, mettant de la sorte à mal le principe d’égalité territoriale entre les agriculteurs.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;De surcroît, la France s’est montrée très mauvaise élève dans le traitement des dossiers des agriculteurs et la gestion de leur calendrier de paiement. Il en a découlé d’importants retards et incertitudes de paiement pour les bénéficiaires, ainsi qu’une évolution permanente des critères d’éligibilité et des niveaux de financement. Ces problèmes de gouvernance envoient un fort signal de découragement pour souscrire à des mesures facultatives. A cela s’ajoute le fait que le déséquilibre persistant entre les budgets respectifs des deux piliers de la PAC n’a pas été amoindri par un transfert de fonds du premier vers le second à la hauteur du maximum autorisé par les règles communautaires.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;Pour finir, la France a sur plusieurs points rejeté la responsabilité des problèmes et échecs rencontrés dans la mise en œuvre de la PAC sur la Commission européenne ou les autres États membres de l’UE. Cependant, beaucoup de décisions relèvent en réalité de son propre arbitrage et c’est bien elle qui a freiné l’amélioration de certains dispositifs de la PAC, en n’utilisant pas assez les marges de manœuvre à sa disposition. Peuvent être listés à ce titre les choix suivants : absence de plafonnement, autorisation d’épandre des pesticides sur les surfaces d’intérêt écologique, reconnaissance insuffisante de la valeur alimentaire des ressources pastorales, non abandon des références historiques définissant la valeur des droits à paiements de base, non utilisation des plafonds ou pourcentages maximum permis pour certains dispositifs (par exemple, le paiement redistributif), non ouverture du schéma des petites fermes, etc.</p>
        <br/>
        <p>&emsp;&emsp;&emsp;En clair, la combinaison entre des erreurs stratégiques européennes et françaises dans la définition et la mise en œuvre de la PAC a encore un peu plus terni l’image de la PAC auprès de ses bénéficiaires et des citoyens. La réforme de 2015 n’a su restaurer ni sa légitimité, ni sa lisibilité. La gouvernance de la PAC ne s’est pas non plus ouverte à la participation démocratique demandée par la société civile : cette politique demeure impénétrable, opaque et incompréhensible pour l’immense majorité des citoyens européens. Il sera donc primordial que la prochaine révision s’attèle à redorer son image et restaurer son sens, sans quoi la PAC pourrait définitivement perdre toute justification auprès des contribuables européens et tout intérêt aux yeux de ses bénéficiaires.</p>
        <br/>
        <p>Bilan de l’actuelle PAC de la plateforme <i>Pour une autre PAC </i> à télécharger</p>
        </div>
      </Container>
    </div>
  )
}

export default BilanActuel
