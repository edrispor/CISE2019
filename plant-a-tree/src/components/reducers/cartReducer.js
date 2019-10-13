import {
  ADD_TO_CART,
  REMOVE_ITEM,
  SUB_QUANTITY,
  ADD_QUANTITY,
  ADD_URBAN_SHIPPING,
  SUB_URBAN_SHIPPING,
  ADD_RURAL_SHIPPING,
  SUB_RURAL_SHIPPING,
  ADD_OUTSIDE_SHIPPING,
  SUB_OUTSIDE_SHIPPING
} from "../actions/action-types/cart-actions";

const initState = {
  isFetching: false,
  errorMessage: "",
  items:[{"product_id":1,"product_name":"New Zealand Kauri","latin_name":"Agathis Australis","QOH":"3","description":"An iconic NZ tree, this mighty forest giant can reach up to 50m in maturity. Its leaves are green, glossy, oval and leathery, with layered branches, making a great natural canopy. The Kauri needs lots of space to grow, making it great for open sections or large gardens. Although kauri are tolerant of a wide range of conditions, they prefer a rich, moist soil and grow better if not too exposed. Try planting in groves for a majestic effect now and in years to come.","product_price":45,"maintenaince":"Medium","tree_type":"Evergreen, NZ Native, Hardwood","sunlight":"Medium","soil_drainage":"Medium","growth_rate":"Medium","height":"50m"},{"product_id":2,"product_name":"Pōhutukawa","latin_name":"Metrosideros Excelsa","QOH":"6","description":"One of NZ's iconic and recognisable trees, the Pōhutukawa is considered to be the country's Christmas tree as its crimson red flowers blooms around the holiday season. An evergreen tree that grows dark green oval leaves with a dark red hard heartwood to withstand most coastal conditions particularly wind damage.","product_price":32,"maintenaince":"High","tree_type":"Evergreen, NZ Native, Flowering","sunlight":"Sunny","soil_drainage":"High","growth_rate":"Slow","height":"20m"},{"product_id":3,"product_name":"Kōwhai​","latin_name":"Sophora","QOH":"8","description":"The Kōwhai tree is another NZ native, best known for their brilliant yellow flowers that appear in profusion in Spring and stand out among the forest greenery. Kowhai prefer to grow in full sun and need good drainage. The flowers hold great appeal to native birds. Look out for Kōwhai moth as this can cause considerable damage. All species of kōwhai produce pods with abundant hard-coated yellow to yellow-brown seeds.","product_price":25,"maintenaince":"Medium","tree_type":"Semi-Deciduos, NZ Native, Flowering","sunlight":"Sunny","soil_drainage":"Low","growth_rate":"Slow","height":"25m"},{"product_id":4,"product_name":"New Zealand Cabbage Tree","latin_name":"Cordyline Australis​","QOH":"15","description":"The cabbage tree is one of the most common yet distinctive trees in the NZ landscape, especially on farms. They grow all over the country, but prefer wet, open areas like swamps. It has a stout trunk and sword-like leaves, which are clustered at the tips of the branches and can be up to 1 metre long. Its fruit is a favourite food source for the New Zealand pigeon and other native birds.","product_price":10,"maintenaince":"Low","tree_type":"Evergreen, NZ Native, Fruit Tree","sunlight":"Medium","soil_drainage":"Medium","growth_rate":"Fast","height":"20m"},{"product_id":5,"product_name":"Gala Apple Tree","latin_name":"Malus domestica 'Gala'","QOH":"12","description":"This apple tree produces one of the world’s finest apples; creamy, fine textured flesh, crisp, sweet and juicy apples. During the spring, the tree’s beautiful pink buds will open to reveal snowy white flowers, a sure sign that your tree is well on its way to producing fruit. The summer produces the Gala apples mature to a bright overall red color, with bold red stripes over a yellow-green background. Although the Gala apple is popular for their large, crisp fruit, they also resist bruising and can be stored up to six months. ","product_price":12,"maintenaince":"Low","tree_type":"Deciduos, Fruit Tree, Hardwood","sunlight":"Shade","soil_drainage":"Medium","growth_rate":"Medium","height":"6m"},{"product_id":6,"product_name":"Feijoa​ Tree","latin_name":"Acca Sellowiana","QOH":"16","description":"Feijoas are a hardy fruiting tree that are really easy to grow and look after. They can provide you an abundance of fruit from autumn to early winter each year. Their delightful bright red flowers, which appear at Christmas, add to their appeal. Autumn is an ideal time to plant feijoas in most areas of New Zealand. Prepare your soil with organic matter like compost and sheep pellets. Water deeply and regularly from mid to late summer when the fruit is developing and ripening.","product_price":12,"maintenaince":"Low","tree_type":"Fruit Tree, Evergreen","sunlight":"Shade","soil_drainage":"High","growth_rate":"Medium","height":"7m"},{"product_id":7,"product_name":"Lemon Tree","latin_name":"Citrus × limon","QOH":"17","description":"An iconic tree overall, a lemon tree will nestle into the sunniest of spots, next to decks and verandas, or as a centerpiece in a container on a balcony. Feed your lemons in spring and summer to encourage maximum flowering and fruiting. Plant lemons in spring, autumn and winter (only where frosts are not prevalent). In addition to vitamin C, lemons are very high in potassium.","product_price":10,"maintenaince":"Medium","tree_type":"Fruit Tree, Evergreen","sunlight":"Sunny","soil_drainage":"High","growth_rate":"Slow","height":"6m"},{"product_id":8,"product_name":"Olive Tree","latin_name":"Olea europaea","QOH":"11","description":"The olive tree is a small tree. Its scientific name is Olea europaea. A long time ago, it came from the coastal areas of the eastern Mediterranean, from Syria and the maritime (next to the sea) parts of Asia Minor and northern Iran at the south end of the Caspian Sea. It has been farmed for a very long time. The Ancient Greeks were farming it. They spread the trees to the western part of the Mediterranean.Olive trees like soil with lots of chalk in it. They grow best on limestone slopes and crags in coastal climate.","product_price":13,"maintenaince":"Medium","tree_type":"Evergreen, Fruit Tree","sunlight":"Sunny","soil_drainage":"High","growth_rate":"Slow","height":"9m"},{"product_id":9,"product_name":"Baby Blue Tree","latin_name":"Nemophila menziesii","QOH":"6","description":"This is a small-growing eucalypt usually seen as a tall, spreading shrub that retains its juvenile foliage into maturity. Young leaves, stems and inflorescences have a powdery white bloom. Foliage is strikingly silvery-grey and round in form. Cream flowers are produced between May and November and the large fruits that follow are cup-shaped","product_price":18,"maintenaince":"Medium","tree_type":"Gum Tree, Palm Tree, NZ Native, Evergreen","sunlight":"Sunny","soil_drainage":"High","growth_rate":"Slow","height":"9m"},{"product_id":10,"product_name":"Swamp Peppermint Tree","latin_name":"Taxandria linearifolia","QOH":"7","description":"This gum tree is fast-growing, with a tall, dense crown. An evergreen tree, which holds it lower limbs, making for an excellent shelter tree. Tolerant of both drought and wet soils. Bark is smooth and white on smaller branches, becoming rough, fibrous and grey on larger branches and the trunk. Leaves have a peppermint odor when crushed. It gushes creamy-white flowers from March-June, which attract bees.","product_price":13,"maintenaince":"Low ","tree_type":"Gum Tree, Palm Tree, NZ Native, Evergreen","sunlight":"Medium","soil_drainage":"Medium","growth_rate":"Fast","height":"15m"},{"product_id":11,"product_name":"Manna Gum Tree","latin_name":"Eucalyptus viminalis","QOH":"10","description":"Attractive large tree tolerant of drought.  Bark is shed in ribbons during summer, leaving upper trunk and branches smooth and white. The base of the trunk remains bark-coated. Reliable coppicer providing good fuelwood. Provides good tall shelter on dry exposed sites. Cream flowers from January-May. Great for bees. Evergreen. Moderately frost tolerant","product_price":12,"maintenaince":"Low","tree_type":"Gum Tree, Palm Tree, NZ Native, Evergreen","sunlight":"Medium","soil_drainage":"Medium","growth_rate":"Slow","height":"30m"},{"product_id":12,"product_name":"Red Stringybark Tree","latin_name":"Eucalyptus macrorhyncha","QOH":"12","description":"'Tall, straight-trunked tree with coarse stringy bark. Durable timber for above-ground outdoor use or general construction. The timber is pinky/brown to red in colour. Good drought tolerance. White flowers from January-March. Evergreen. Moderate frost tolerance. Needs well drained soils.","product_price":14,"maintenaince":"Medium","tree_type":"Gum Tree, Palm Tree, NZ Native, Evergreen","sunlight":"Medium","soil_drainage":"High","growth_rate":"Fast","height":"30m"},{"product_id":13,"product_name":"Umbrella Palm","latin_name":"Hedyscepe canterburyana","QOH":"21","description":"A rare valuable palm, widely cultivated in water gardens and as a potted plant. Very clean, beautiful, with strong arching fronds which emerge from a smooth pale green/white crown shaft.  Frost tender when young and slow growing.  Fronds are umbrella like when bigger.","product_price":12,"maintenaince":"Medium","tree_type":"Palm Tree, Evergreen","sunlight":"Medium","soil_drainage":"Shade","growth_rate":"Medium","height":"20m"},{"product_id":14,"product_name":"Pitt Island Nikau","latin_name":"Rhopalostylis sapida","QOH":"17","description":"Classic NZ palm. Grows at a faster rate than the mainland native. Hardy on sandy coastal regions, they are also reasonably drought tolerant, with thicker trunks and more salt and wind-tolerant palms. Beautiful dark green upright foliage that truly sets it apart from the rest. Very tidy habit. A must  for a lovely lush tropical feel. World’s most southern palm.","product_price":13,"maintenaince":"Medium","tree_type":"Gum Tree, Palm Tree, NZ Native, Evergreen","sunlight":"Shade","soil_drainage":"High","growth_rate":"Medium","height":"10m"},{"product_id":15,"product_name":"Bamboo Tree","latin_name":"Bambusoideae","QOH":"22","description":"Bamboo offers a great solution to garden privacy fast. It is stylish and creates green space. Bamboos have jointed stems, small flowers enclosed in structures known as spikelets, a specially modified embryo within the seed, and a grainlike fruit. Bamboo is a heavy feeder and loves lots of food. Once planted, compost, sheep pellets, blood and bone or fish fertiliser are all good. It is best to feed in spring and autumn and at the time of planting.","product_price":11,"maintenaince":"Medium","tree_type":"Hedge, Evergreen","sunlight":"Medium","soil_drainage":"Medium","growth_rate":"Fast","height":"20m"},{"product_id":16,"product_name":"Portuguese Laurel","latin_name":"Prunus Lusitanica","QOH":"16","description":"A very hardy evergreen with lush, dark foliage and maroon coloured stems, Portuguese laurel hedge plants make a wonderful dense hedge, offering year-round screening, wind protection and noise reduction. Topiary standards excellent for formal design. Produces slender white flower racemes late spring and summer. Berries are poisonous to animals. Not tolerant of wet sites. Cold and drought hardy.","product_price":8,"maintenaince":"Medium","tree_type":"Hedge, Evergreen","sunlight":"Sunny","soil_drainage":"Low","growth_rate":"Medium","height":"12m"},{"product_id":17,"product_name":"Olearia ","latin_name":"Olearia  Nummularifolia","QOH":"17","description":"Also known as Tree Daisies, this Olearia hedge is alpine tree daisy shrub with a twiggy dense growth up to 3 m high with branchlets that are sticky in the young stage and are clothed with white or yellowish star-shaped hairs. They are leathery, very thick and small roundish,(coin-shaped hence the specific name) leaves that have a brownish tomentum underneath. Its daisy flowers appear in spring through to autumn on the branch tips. They are particularly tough in dry and windy conditions.  ","product_price":9,"maintenaince":"Low","tree_type":"Hedge, Evergreen","sunlight":"Medium","soil_drainage":"Medium","growth_rate":"Slow","height":"3m"},{"product_id":18,"product_name":"Silver Birch Tree","latin_name":"Betula pendula","QOH":"3","description":"The number one silver birch, hardy neat upright form with stunning pure white stem. Straight trunk with silvery-white bark. Brilliant golden foliage in autumn. An old favourite. Very effective in avenues or group plantings, a beautiful tree worthy of any landscape. Tolerant of very poor soils. Fast-growing. Deciduous. Very cold hardy.","product_price":50,"maintenaince":"Low","tree_type":"Hardwood, Deciduos","sunlight":"Low","soil_drainage":"Low","growth_rate":"Fast","height":"15m"},{"product_id":19,"product_name":"Mt Fuji Cherry Tree","latin_name":"Prunus 'Shirotae'","QOH":"2","description":"The famous \"Mt. Fuji Cherry\" forms a beautifully propotioned, small, flat-topped tree with horizontal, slightly drooping branches that bear very large, pure white scented flowers that are a mix of both single and semi-doubles. Leaves are deeply serrated and turn a distinctive golden-yellow in autumn. 'Shirotae' is one of the most gorgeous white-flowering cherries.","product_price":67,"maintenaince":"Medium","tree_type":"Hardwood, Deciduos","sunlight":"Sunny","soil_drainage":"Medium","growth_rate":"Medium","height":"5m"},{"product_id":20,"product_name":"English Oak","latin_name":"Quercus robur","QOH":"4","description":"A classic oak tree popular for its hape and broad spreading branches. Native to England yet found in many NZ parks and large gardens. It has a short-fissured bark trunk with a majestic head of open, rugged branches and clusters of acorns late summer–early autumn. Long lasting and durable heartwood timber. Tolerant of a wide range of sites, including heavy clays & strong exposure.  ","product_price":55,"maintenaince":"Low","tree_type":"Hardwood, Deciduos","sunlight":"Medium","soil_drainage":"Medium","growth_rate":"Medium","height":"20m"},{"product_id":21,"product_name":"Shovel","latin_name":"NA","QOH":"0","description":"This D-Handle round shovel is a must for the work outdoors, serving lawn, garden and construction jobs. This versatile tool features a long ash wood handle and a durable forged steel head for blade strength. This shovel will perform against frequent use and abuse, guaranteed.","product_price":20,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":22,"product_name":"Rake","latin_name":"NA","QOH":"0","description":"Great tool for general garden clean-up tasks. Use for raking soil, stones and clearing debris.","product_price":25,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":23,"product_name":"Hoe","latin_name":"NA","QOH":"0","description":"Suitable for breaking up soil, hoeing and cultivating. Features a stylish green heat-treated carbon steel head designed for longevity. The long hardwood handle makes it much easier to use and helps absorb shock on impact.","product_price":30,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":24,"product_name":"Cultivator","latin_name":"NA","QOH":"0","description":"Sharp tines cut through the ground easier.Comfortable Softouch handle reduces hand stress","product_price":23,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":25,"product_name":"Transplanter","latin_name":"NA","QOH":"0","description":"Durable one piece hi strength aluminium,Beveled edges","product_price":26,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":26,"product_name":"Nyglass Planter Hoe","latin_name":"NA","QOH":"0","description":"Ideal for multiple planting and weeding tasks.Hanging hole for easy storage.Ideal for multiple planting and weeding tasks- FiberComp™ material does not corrode or age.","product_price":40,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":27,"product_name":"Weeder","latin_name":"NA","QOH":"0","description":"Forked tip cuts deep to get weeds- Comfortable Softouch handle reduces hand stress.Cast aluminium head resists corrosion","product_price":24,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":28,"product_name":"Gardener’s Tool Belt","latin_name":"NA","QOH":"0","description":"The ingenious design includes four separate pockets; use as many as you need and slide the others off. The pockets snap into place so they stay put – you can slide them to the back and out of the way when you're crouching or bending. And never again forget where you set down your pruners – with this tool belt you can safely stow them between uses. One pocket has a hook-and-loop flap closure for phone or keys. Another has a netted pocket for your water bottle. The last two have double openings for hand tools and small supplies. Belt is adjustable and has a durable clip so it's easy on, easy off.","product_price":30,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":30,"product_name":"Gardener’s Best® All-Purpose Organic Fertiliz","latin_name":"NA","QOH":"0","description":"All-natural fertilizer provides a long-lastin","product_price":40,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":31,"product_name":"Elevated Garden Booster Compost Mix Kit","latin_name":"NA","QOH":"0","description":"Recharge the soil and replenish the nutrients","product_price":25,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":32,"product_name":"Organic Self-Watering Potting Mix, 20 Qts.","latin_name":"NA","QOH":"0","description":"Start your organic garden off right! A carefu","product_price":13,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":33,"product_name":"Organic Potting Mix, 20 Qts.","latin_name":"NA","QOH":"0","description":"This premium potting mix is the ideal foundat","product_price":22,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":34,"product_name":"Neem Oil Concentrate, 1 Pint","latin_name":"NA","QOH":"0","description":"This organic, multi-purpose pest control belo","product_price":20,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":35,"product_name":"Water Right™ Light Hoses 50m","latin_name":"NA","QOH":"0","description":"Made for the way you garden! Flexible, durabl","product_price":50,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":36,"product_name":"French Blue Watering Can","latin_name":"NA","QOH":"0","description":"A longtime customer favorite, this lightweigh","product_price":30,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":37,"product_name":"Flip-It Hose Nozzle","latin_name":"NA","QOH":"0","description":"This quick-change hose nozzle delivers the wa","product_price":35,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"},{"product_id":38,"product_name":"Beneficial Nematodes Combo Pack","latin_name":"NA","QOH":"0","description":"Beneficial nematodes are naturally occurring ","product_price":57,"maintenaince":"NA","tree_type":"NA","sunlight":"NA","soil_drainage":"NA","growth_rate":"NA","height":"NA"}],
  addedItems: [],
  total: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.product_id === action.id);
    //check if the action id exists in the addedItems
    let existed_item = state.addedItems.find(
      item => action.id === item.product_id
    );
    if (existed_item) {
      addedItem.quantity += 1;
      return {
        ...state,
        total: state.total + addedItem.product_price
      };
    } else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.product_price;

      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      };
    }
  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(
      item => action.id === item.product_id
    );
    let new_items = state.addedItems.filter(
      item => action.id !== item.product_id
    );

    //calculating the total
    let newTotal =
      state.total - itemToRemove.product_price * itemToRemove.quantity;
    console.log(itemToRemove);
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    };
  }
  //INSIDE CART COMPONENT
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.product_id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.product_price;
    return {
      ...state,
      total: newTotal
    };
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.product_id === action.id);
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(
        item => item.product_id !== action.id
      );
      let newTotal = state.total - addedItem.product_price;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      };
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.product_price;
      return {
        ...state,
        total: newTotal
      };
    }
  }

  if (action.type === ADD_URBAN_SHIPPING) {
    return {
      ...state,
      total: state.total + 10
    };
  }

  if (action.type === SUB_URBAN_SHIPPING) {
    return {
      ...state,
      total: state.total - 10
    };
  } 
  if (action.type === ADD_RURAL_SHIPPING) {
    return {
      ...state,
      total: state.total + 17
    };
  }

  if (action.type ===  SUB_RURAL_SHIPPING) {
    return {
      ...state,
      total: state.total - 17
    };
  }
  if (action.type === ADD_OUTSIDE_SHIPPING) {
    return {
      ...state,
      total: state.total + 22
    };
  }

  if (action.type === SUB_OUTSIDE_SHIPPING) {
    return {
      ...state,
      total: state.total - 22
    };
  }
  else {
    return state;
  }

  /* switch (action.type) {
    case FETCHING_ITEMS_REQUEST:
      return { ...state, isFetching: true };
    case FETCHING_ITEMS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    case FETCHING_ITEMS_SUCCESS:
      return { ...state, isFetching: false, items: action.payload };
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload]
      };
    default:
      return state;
  }*/
};

export default cartReducer;
