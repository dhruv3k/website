// ─── VERB DATA ───
// Each sentence: { nl, en, tags[], visuals[] }
// visuals follow word order of sentence, max 5, ❌ added automatically for negatives

window.VERB_DATA = {
  verbs: [

    // ════════════════════════════════
    // BEING & HAVING
    // ════════════════════════════════
    {
      cat: "Being & Having", en: "to be", nl: "zijn", emoji: "🔵",
      ik: "ben", jij: "bent", hij: "is", pastIk: "was", pastRest: "waren",
      participle: "geweest", aux: "zijn", pp: "—", pp2: "—",
      sentences: {
        infinitive: {
          office: {
            simple: [
              { nl: "Lars en Lotte zijn collega's.", en: "Lars and Lotte are colleagues.", tags: [], visuals: ["👨","👩","🏢"] },
              { nl: "Wij zijn klaar met het rapport.", en: "We are done with the report.", tags: [], visuals: ["👥","📄"] }
            ],
            natural: [
              { nl: "Ze zijn vroeger klaar dan verwacht, want niemand fouten maakte.", en: "They are done earlier than expected, because nobody made mistakes.", tags: ["want","niemand","comparative"], visuals: ["👥","✅","⏰"] },
              { nl: "Lars en Thomas zijn allebei slimmer dan vorig jaar.", en: "Lars and Thomas are both smarter than last year.", tags: ["comparative"], visuals: ["👨","👨","💡"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Krishna en Sita zijn vrienden.", en: "Krishna and Sita are friends.", tags: [], visuals: ["👦","👧","❤️"] },
              { nl: "Wij zijn thuis na school.", en: "We are at home after school.", tags: [], visuals: ["👥","🏠","🎒"] }
            ],
            natural: [
              { nl: "Ze zijn gelukkiger dan gisteren omdat de zon schijnt.", en: "They are happier than yesterday because the sun is shining.", tags: ["omdat","comparative"], visuals: ["👦","👧","☀️"] },
              { nl: "Krishna en Hanuman zijn sterker dan iemand anders in de klas.", en: "Krishna and Hanuman are stronger than anyone else in the class.", tags: ["comparative","iemand"], visuals: ["👦","💪","🏫"] }
            ]
          }
        },
        ik_pres: {
          office: {
            simple: [
              { nl: "Ik ben vandaag vroeg op kantoor.", en: "I am early at the office today.", tags: [], visuals: ["👨","🏢","⏰"] },
              { nl: "Ik ben blij met hem als collega.", en: "I am happy with him as a colleague.", tags: ["hem"], visuals: ["👨","😊","👥"] }
            ],
            natural: [
              { nl: "Ik ben verantwoordelijk voor het project, dus ik stuur haar een e-mail.", en: "I am responsible for the project, so I send her an email.", tags: ["dus","haar"], visuals: ["👨","📋","📧"] },
              { nl: "Ik ben vroeger klaar dan gewoonlijk omdat niemand er vandaag is.", en: "I am done earlier than usual because nobody is here today.", tags: ["omdat","niemand","comparative"], visuals: ["👨","✅","🏢"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik ben blij want Sita komt spelen.", en: "I am happy because Sita is coming to play.", tags: ["want"], visuals: ["😊","👧","🎮"] },
              { nl: "Ik ben de snelste loper in de klas.", en: "I am the fastest runner in the class.", tags: ["comparative"], visuals: ["🏃","🏫","🥇"] }
            ],
            natural: [
              { nl: "Ik ben sneller dan Sita, maar zij is beter in rekenen.", en: "I am faster than Sita, but she is better at maths.", tags: ["maar","comparative"], visuals: ["🏃","👧","📐"] },
              { nl: "Ik ben bang voor iets in het donker, want het is heel stil.", en: "I am scared of something in the dark, because it is very quiet.", tags: ["want","iets"], visuals: ["😨","🌙","🔇"] }
            ]
          }
        },
        jij_pres: {
          office: {
            simple: [
              { nl: "Jij bent de beste in het team.", en: "You are the best in the team.", tags: ["comparative"], visuals: ["👤","🏆","👥"] },
              { nl: "Ben jij klaar met je rapport?", en: "Are you done with your report?", tags: [], visuals: ["👤","📄","✅"] }
            ],
            natural: [
              { nl: "Jij bent verantwoordelijker dan iemand anders hier, dus je leidt de vergadering.", en: "You are more responsible than anyone else here, so you lead the meeting.", tags: ["dus","comparative","iemand"], visuals: ["👤","👥","🎤"] },
              { nl: "Ben jij al klaar terwijl Lars nog bezig is?", en: "Are you already done while Lars is still busy?", tags: ["terwijl"], visuals: ["👤","✅","👨"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Jij bent mijn beste vriend.", en: "You are my best friend.", tags: ["comparative"], visuals: ["👤","❤️","👦"] },
              { nl: "Ben jij moe na het spelen?", en: "Are you tired after playing?", tags: [], visuals: ["👤","😴","⚽"] }
            ],
            natural: [
              { nl: "Jij bent groter dan Krishna, maar hij rent sneller dan jou.", en: "You are taller than Krishna, but he runs faster than you.", tags: ["maar","comparative"], visuals: ["👤","📏","👦"] },
              { nl: "Ben jij ook bang voor iets, of ben je dapper zoals Hanuman?", en: "Are you also scared of something, or are you brave like Hanuman?", tags: ["iets"], visuals: ["👤","😨","💪"] }
            ]
          }
        },
        hij_pres: {
          office: {
            simple: [
              { nl: "Thomas is de nieuwe stagiair.", en: "Thomas is the new intern.", tags: [], visuals: ["👨","🆕","🏢"] },
              { nl: "Het project is bijna klaar.", en: "The project is almost done.", tags: [], visuals: ["📋","✅","⏳"] }
            ],
            natural: [
              { nl: "Lars is vriendelijker dan zijn vorige manager, want hij luistert naar iedereen.", en: "Lars is friendlier than his previous manager, because he listens to everyone.", tags: ["want","comparative"], visuals: ["👨","😊","👂"] },
              { nl: "Lotte is de slimste in de vergadering, dus zij neemt de beslissing.", en: "Lotte is the smartest in the meeting, so she makes the decision.", tags: ["dus","comparative"], visuals: ["👩","💡","🏆"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Hanuman is de sterkste in de klas.", en: "Hanuman is the strongest in the class.", tags: ["comparative"], visuals: ["👦","💪","🏫"] },
              { nl: "Krishna is lief maar ook stoer.", en: "Krishna is sweet but also tough.", tags: ["maar"], visuals: ["👦","❤️","💪"] }
            ],
            natural: [
              { nl: "Hanuman is sterker dan iemand anders, want hij oefent elke dag.", en: "Hanuman is stronger than anyone else, because he practises every day.", tags: ["want","comparative","iemand"], visuals: ["👦","💪","📅"] },
              { nl: "Het is warmer buiten dan binnen, want de zon schijnt heel fel.", en: "It is warmer outside than inside, because the sun is shining very brightly.", tags: ["want","comparative"], visuals: ["☀️","🌡️","🏠"] }
            ]
          }
        },
        ik_past: {
          office: {
            simple: [
              { nl: "Ik was gisteren ziek maar nu ben ik beter.", en: "I was sick yesterday but now I am better.", tags: ["maar","comparative"], visuals: ["👨","🤒","💊"] },
              { nl: "Ik was vroeg op kantoor vanochtend.", en: "I was early at the office this morning.", tags: [], visuals: ["👨","🏢","🌅"] }
            ],
            natural: [
              { nl: "Ik was de vroegste in het kantoor omdat niemand anders op tijd kwam.", en: "I was the earliest in the office because nobody else arrived on time.", tags: ["omdat","niemand","comparative"], visuals: ["👨","🏢","⏰"] },
              { nl: "Ik was verantwoordelijk voor hem, dus ik belde hem meteen.", en: "I was responsible for him, so I called him immediately.", tags: ["dus","hem"], visuals: ["👨","📞","👤"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik was gisteren de snelste in de klas.", en: "I was the fastest in the class yesterday.", tags: ["comparative"], visuals: ["🏃","🏫","🥇"] },
              { nl: "Ik was bang maar Hanuman hielp me.", en: "I was scared but Hanuman helped me.", tags: ["maar"], visuals: ["😨","👦","🤝"] }
            ],
            natural: [
              { nl: "Ik was gelukkiger dan Sita omdat ik het antwoord wist.", en: "I was happier than Sita because I knew the answer.", tags: ["omdat","comparative"], visuals: ["😊","👧","✏️"] },
              { nl: "Ik was de jongste, maar ik rende sneller dan iedereen.", en: "I was the youngest, but I ran faster than everyone.", tags: ["maar","comparative"], visuals: ["👦","🏃","🥇"] }
            ]
          }
        },
        rest_past: {
          office: {
            simple: [
              { nl: "Ze waren allemaal blij met het resultaat.", en: "They were all happy with the result.", tags: [], visuals: ["👥","😊","🏆"] },
              { nl: "Lars en Thomas waren op tijd voor de vergadering.", en: "Lars and Thomas were on time for the meeting.", tags: [], visuals: ["👨","👨","📅"] }
            ],
            natural: [
              { nl: "Ze waren vroeger klaar dan verwacht, want iemand had het al gedaan.", en: "They were done earlier than expected, because someone had already done it.", tags: ["want","iemand","comparative"], visuals: ["👥","✅","⏰"] },
              { nl: "De vergaderingen waren langer dan nodig, maar niemand zei iets.", en: "The meetings were longer than necessary, but nobody said anything.", tags: ["maar","niemand","iets","comparative"], visuals: ["👥","⏰","😶"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ze waren samen in de tuin aan het spelen.", en: "They were playing together in the garden.", tags: [], visuals: ["👦","👧","🌳"] },
              { nl: "De kinderen waren moe na het spelen.", en: "The children were tired after playing.", tags: [], visuals: ["👦","👧","😴"] }
            ],
            natural: [
              { nl: "Krishna en Sita waren gelukkiger dan ooit omdat iemand hen een cadeau gaf.", en: "Krishna and Sita were happier than ever because someone gave them a present.", tags: ["omdat","iemand","comparative"], visuals: ["👦","👧","🎁"] },
              { nl: "Ze waren vroeger klaar, dus ze mochten buiten spelen.", en: "They were done earlier, so they were allowed to play outside.", tags: ["dus","comparative"], visuals: ["👥","✅","🌳"] }
            ]
          }
        },
        participle: {
          office: {
            simple: [
              { nl: "Lars is op tijd geweest vandaag.", en: "Lars has been on time today.", tags: [], visuals: ["👨","⏰","✅"] },
              { nl: "Thomas is ziek geweest maar hij is nu beter.", en: "Thomas has been sick but he is better now.", tags: ["maar","comparative"], visuals: ["👨","🤒","💊"] }
            ],
            natural: [
              { nl: "Lotte is altijd de beste geweest, want ze werkt harder dan iemand anders.", en: "Lotte has always been the best, because she works harder than anyone else.", tags: ["want","comparative","iemand"], visuals: ["👩","🏆","💼"] },
              { nl: "Ik ben verantwoordelijk geweest, dus ik heb hem alles verteld.", en: "I have been responsible, so I told him everything.", tags: ["dus","hem"], visuals: ["👨","📋","👤"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Krishna is lief geweest vandaag.", en: "Krishna has been sweet today.", tags: [], visuals: ["👦","❤️","✅"] },
              { nl: "Ze zijn samen geweest in het park.", en: "They have been together in the park.", tags: [], visuals: ["👥","🌳","☀️"] }
            ],
            natural: [
              { nl: "Sita is dapperder geweest dan Krishna, want ze hielp iemand die viel.", en: "Sita has been braver than Krishna, because she helped someone who fell.", tags: ["want","comparative","iemand"], visuals: ["👧","💪","🤝"] },
              { nl: "Ze zijn gelukkiger geweest dan ooit, omdat de vakantie begon.", en: "They have been happier than ever, because the holidays started.", tags: ["omdat","comparative"], visuals: ["👥","😊","🏖️"] }
            ]
          }
        },
        passive_pres: { office: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] }, kids: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] } },
        passive_past: { office: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] }, kids: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] } }
      }
    },

    // ─── hebben ───
    {
      cat: "Being & Having", en: "to have", nl: "hebben", emoji: "🤲",
      ik: "heb", jij: "hebt", hij: "heeft", pastIk: "had", pastRest: "hadden",
      participle: "gehad", aux: "hebben", pp: "—", pp2: "—",
      sentences: {
        infinitive: {
          office: {
            simple: [
              { nl: "We hebben een vergadering om twee uur.", en: "We have a meeting at two o'clock.", tags: [], visuals: ["👥","📅","🕑"] },
              { nl: "Ze hebben veel werk vandaag.", en: "They have a lot of work today.", tags: [], visuals: ["👥","💼","📚"] }
            ],
            natural: [
              { nl: "Ze hebben meer verantwoordelijkheid dan vorig jaar, maar ze zijn ook beter geworden.", en: "They have more responsibility than last year, but they have also improved.", tags: ["maar","comparative"], visuals: ["👥","📋","📈"] },
              { nl: "We hebben niets gehoord van de klant, dus Lotte belt hem op.", en: "We have heard nothing from the client, so Lotte calls him.", tags: ["dus","niets","hem"], visuals: ["👥","📞","👤"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ze hebben een hond en een kat thuis.", en: "They have a dog and a cat at home.", tags: [], visuals: ["🐶","🐱","🏠"] },
              { nl: "We hebben geen huiswerk vandaag!", en: "We have no homework today!", tags: ["geen"], visuals: ["📚","✏️","😊"] }
            ],
            natural: [
              { nl: "Ze hebben meer speelgoed dan iemand anders in de klas.", en: "They have more toys than anyone else in the class.", tags: ["comparative","iemand"], visuals: ["🎮","🧸","🏫"] },
              { nl: "We hebben niets te eten, want mama is nog niet thuis.", en: "We have nothing to eat, because mum is not home yet.", tags: ["want","niets"], visuals: ["🍽️","👩","🏠"] }
            ]
          }
        },
        ik_pres: {
          office: {
            simple: [
              { nl: "Ik heb een afspraak met haar om drie uur.", en: "I have an appointment with her at three.", tags: ["haar"], visuals: ["👨","📅","👩"] },
              { nl: "Ik heb zijn rapport nog niet gelezen.", en: "I have not read his report yet.", tags: ["zijn"], visuals: ["👨","📄","👤"] }
            ],
            natural: [
              { nl: "Ik heb meer vragen dan antwoorden, maar ik stuur hem toch een e-mail.", en: "I have more questions than answers, but I send him an email anyway.", tags: ["maar","hem","comparative"], visuals: ["👨","❓","📧"] },
              { nl: "Ik heb geen tijd vandaag omdat ik drie vergaderingen heb.", en: "I have no time today because I have three meetings.", tags: ["omdat","geen"], visuals: ["⏰","📅","👥"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik heb een nieuwe fiets gekregen!", en: "I got a new bicycle!", tags: [], visuals: ["👦","🚲","🎁"] },
              { nl: "Ik heb geen idee waar mijn tas is.", en: "I have no idea where my bag is.", tags: ["geen"], visuals: ["👦","🎒","❓"] }
            ],
            natural: [
              { nl: "Ik heb meer snoep dan Sita, maar ik deel het met haar.", en: "I have more sweets than Sita, but I share it with her.", tags: ["maar","comparative","haar"], visuals: ["👦","🍬","👧"] },
              { nl: "Ik heb niets verkeerd gedaan, want ik heb alles goed gelezen.", en: "I have done nothing wrong, because I read everything carefully.", tags: ["want","niets"], visuals: ["👦","✅","📚"] }
            ]
          }
        },
        jij_pres: {
          office: {
            simple: [
              { nl: "Heb jij zijn telefoonnummer?", en: "Do you have his phone number?", tags: ["zijn"], visuals: ["👤","📱","👨"] },
              { nl: "Jij hebt meer ervaring dan Thomas.", en: "You have more experience than Thomas.", tags: ["comparative"], visuals: ["👤","⭐","👨"] }
            ],
            natural: [
              { nl: "Hebt jij haar rapport al gelezen terwijl ik vergaderde?", en: "Have you already read her report while I was in a meeting?", tags: ["terwijl","haar"], visuals: ["👤","📄","👩"] },
              { nl: "Jij hebt meer geduld dan iemand anders hier, dus jij helpt hem.", en: "You have more patience than anyone else here, so you help him.", tags: ["dus","comparative","iemand","hem"], visuals: ["👤","😌","👨"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Heb jij mijn potlood gezien?", en: "Have you seen my pencil?", tags: [], visuals: ["👤","✏️","❓"] },
              { nl: "Jij hebt meer snoep dan mij!", en: "You have more sweets than me!", tags: ["comparative","mij"], visuals: ["👤","🍬","😮"] }
            ],
            natural: [
              { nl: "Heb jij iets gegeten terwijl ik buiten speelde?", en: "Have you eaten something while I was playing outside?", tags: ["terwijl","iets"], visuals: ["👤","🍎","🌳"] },
              { nl: "Jij hebt een groter speelgoed dan mij, maar mijn is mooier.", en: "You have a bigger toy than me, but mine is prettier.", tags: ["maar","comparative","mij"], visuals: ["👤","🧸","😊"] }
            ]
          }
        },
        hij_pres: {
          office: {
            simple: [
              { nl: "Lars heeft een nieuwe laptop gekregen.", en: "Lars has received a new laptop.", tags: [], visuals: ["👨","💻","🆕"] },
              { nl: "Thomas heeft geen ervaring met dit programma.", en: "Thomas has no experience with this programme.", tags: ["geen"], visuals: ["👨","💻","❓"] }
            ],
            natural: [
              { nl: "Lotte heeft meer verantwoordelijkheid dan Lars, maar hij heeft meer ervaring.", en: "Lotte has more responsibility than Lars, but he has more experience.", tags: ["maar","comparative"], visuals: ["👩","📋","👨"] },
              { nl: "Hij heeft niets gezegd over het probleem, dus niemand weet het.", en: "He has said nothing about the problem, so nobody knows.", tags: ["dus","niets","niemand"], visuals: ["👨","🤐","👥"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Hanuman heeft de sterkste armen van iedereen.", en: "Hanuman has the strongest arms of everyone.", tags: ["comparative"], visuals: ["👦","💪","🏆"] },
              { nl: "Krishna heeft geen huiswerk gemaakt.", en: "Krishna has not done his homework.", tags: ["geen"], visuals: ["👦","📚","😬"] }
            ],
            natural: [
              { nl: "Hanuman heeft meer kracht dan iemand anders, want hij oefent elke dag.", en: "Hanuman has more strength than anyone else, because he practises every day.", tags: ["want","comparative","iemand"], visuals: ["👦","💪","📅"] },
              { nl: "Hij heeft niets gegeten, terwijl Sita haar bord leeg heeft.", en: "He has eaten nothing, while Sita has finished her plate.", tags: ["terwijl","niets","haar"], visuals: ["👦","🍽️","👧"] }
            ]
          }
        },
        ik_past: {
          office: {
            simple: [
              { nl: "Ik had gisteren een moeilijke vergadering.", en: "I had a difficult meeting yesterday.", tags: [], visuals: ["👨","👥","😓"] },
              { nl: "Ik had zijn rapport al gelezen.", en: "I had already read his report.", tags: ["zijn"], visuals: ["👨","📄","✅"] }
            ],
            natural: [
              { nl: "Ik had meer tijd nodig, maar de deadline was al voorbij.", en: "I needed more time, but the deadline had already passed.", tags: ["maar","comparative"], visuals: ["👨","⏰","📅"] },
              { nl: "Ik had niets gehoord van hem, dus ik belde haar op.", en: "I had heard nothing from him, so I called her.", tags: ["dus","niets","hem","haar"], visuals: ["👨","📞","👩"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik had een heel fijne dag op school.", en: "I had a very nice day at school.", tags: [], visuals: ["👦","🏫","😊"] },
              { nl: "Ik had geen ontbijt gegeten vanochtend.", en: "I had not eaten breakfast this morning.", tags: ["geen"], visuals: ["👦","🥐","😬"] }
            ],
            natural: [
              { nl: "Ik had meer snoep dan Sita, maar ik gaf haar de helft.", en: "I had more sweets than Sita, but I gave her half.", tags: ["maar","comparative","haar"], visuals: ["👦","🍬","👧"] },
              { nl: "Ik had niets verkeerd gedaan, want ik had alles gelezen.", en: "I had done nothing wrong, because I had read everything.", tags: ["want","niets"], visuals: ["👦","✅","📚"] }
            ]
          }
        },
        rest_past: {
          office: {
            simple: [
              { nl: "Ze hadden gisteren een lange vergadering.", en: "They had a long meeting yesterday.", tags: [], visuals: ["👥","📅","⏰"] },
              { nl: "Lars en Lotte hadden hetzelfde idee.", en: "Lars and Lotte had the same idea.", tags: [], visuals: ["👨","👩","💡"] }
            ],
            natural: [
              { nl: "Ze hadden meer werk dan verwacht, want iemand was ziek.", en: "They had more work than expected, because someone was sick.", tags: ["want","iemand","comparative"], visuals: ["👥","💼","🤒"] },
              { nl: "Ze hadden geen idee wat er mis was, maar ze losten het op.", en: "They had no idea what was wrong, but they solved it.", tags: ["maar","geen"], visuals: ["👥","❓","✅"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ze hadden veel plezier in het park.", en: "They had a lot of fun in the park.", tags: [], visuals: ["👥","😄","🌳"] },
              { nl: "Krishna en Sita hadden geen paraplu bij zich.", en: "Krishna and Sita had no umbrella with them.", tags: ["geen"], visuals: ["👦","👧","☔"] }
            ],
            natural: [
              { nl: "Ze hadden meer speelgoed dan iemand anders, maar ze deelden alles.", en: "They had more toys than anyone else, but they shared everything.", tags: ["maar","comparative","iemand"], visuals: ["🧸","🎮","🤝"] },
              { nl: "Ze hadden niets gegeten, omdat de lunch nog niet klaar was.", en: "They had eaten nothing, because lunch was not ready yet.", tags: ["omdat","niets"], visuals: ["👥","🍽️","⏳"] }
            ]
          }
        },
        participle: {
          office: {
            simple: [
              { nl: "Lars heeft een goede dag gehad.", en: "Lars has had a good day.", tags: [], visuals: ["👨","😊","📅"] },
              { nl: "We hebben geen problemen gehad met het systeem.", en: "We have had no problems with the system.", tags: ["geen"], visuals: ["👥","💻","✅"] }
            ],
            natural: [
              { nl: "Lotte heeft meer succes gehad dan iemand anders dit jaar.", en: "Lotte has had more success than anyone else this year.", tags: ["comparative","iemand"], visuals: ["👩","🏆","📅"] },
              { nl: "We hebben niets maar dan ook niets gehad van hem gehoord.", en: "We have heard absolutely nothing from him.", tags: ["niets","hem"], visuals: ["👥","📞","❓"] }
            ]
          },
          kids: {
            simple: [
              { nl: "We hebben een geweldige dag gehad!", en: "We have had a wonderful day!", tags: [], visuals: ["👥","🌟","😄"] },
              { nl: "Hanuman heeft geen angst gehad voor de storm.", en: "Hanuman has had no fear of the storm.", tags: ["geen"], visuals: ["👦","⛈️","💪"] }
            ],
            natural: [
              { nl: "Ze hebben meer plezier gehad dan ooit, want iemand had een verrassing geregeld.", en: "They have had more fun than ever, because someone had arranged a surprise.", tags: ["want","iemand","comparative"], visuals: ["👥","🎉","🎁"] },
              { nl: "Krishna heeft niets maar dan ook niets gehad van zijn huiswerk gedaan.", en: "Krishna has done absolutely none of his homework.", tags: ["niets"], visuals: ["👦","📚","😬"] }
            ]
          }
        },
        passive_pres: { office: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] }, kids: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] } },
        passive_past: { office: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] }, kids: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] } }
      }
    },

    // ─── worden ───
    {
      cat: "Being & Having", en: "to become", nl: "worden", emoji: "🌱",
      ik: "word", jij: "wordt", hij: "wordt", pastIk: "werd", pastRest: "werden",
      participle: "geworden", aux: "zijn", pp: "wordt geworden", pp2: "werd geworden",
      sentences: {
        infinitive: {
          office: {
            simple: [
              { nl: "Ze willen allemaal beter worden in hun werk.", en: "They all want to become better at their work.", tags: [], visuals: ["👥","📈","💼"] },
              { nl: "Wij worden een sterker team elke dag.", en: "We become a stronger team every day.", tags: [], visuals: ["👥","💪","📅"] }
            ],
            natural: [
              { nl: "Ze worden sneller dan vorig jaar, want ze oefenen elke dag samen.", en: "They are becoming faster than last year, because they practise every day together.", tags: ["want","comparative"], visuals: ["👥","📈","📅"] },
              { nl: "Wij worden beter als iemand ons helpt met het project.", en: "We become better when someone helps us with the project.", tags: ["comparative","iemand","ons"], visuals: ["👥","🤝","📋"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ze willen later dokter worden.", en: "They want to become a doctor later.", tags: [], visuals: ["👦","👩‍⚕️","🏥"] },
              { nl: "Wij worden groter en sterker elke dag.", en: "We become taller and stronger every day.", tags: [], visuals: ["👥","📏","💪"] }
            ],
            natural: [
              { nl: "Ze worden slimmer dan vorig jaar, want ze lezen elke dag een boek.", en: "They are becoming smarter than last year, because they read a book every day.", tags: ["want","comparative"], visuals: ["👥","💡","📚"] },
              { nl: "Wij worden beter in rekenen omdat iemand ons elke dag helpt.", en: "We are becoming better at maths because someone helps us every day.", tags: ["omdat","comparative","iemand","ons"], visuals: ["👥","📐","✅"] }
            ]
          }
        },
        ik_pres: {
          office: {
            simple: [
              { nl: "Ik word steeds beter in mijn werk.", en: "I am getting better and better at my work.", tags: ["comparative"], visuals: ["👨","📈","💼"] },
              { nl: "Ik word de nieuwe teamleider volgende maand.", en: "I am becoming the new team leader next month.", tags: [], visuals: ["👨","🏆","📅"] }
            ],
            natural: [
              { nl: "Ik word sneller dan Lars, want ik oefen elke dag na het werk.", en: "I am becoming faster than Lars, because I practise every day after work.", tags: ["want","comparative"], visuals: ["👨","📈","💪"] },
              { nl: "Ik word moe van hem, maar ik zeg niets want hij is mijn collega.", en: "I am getting tired of him, but I say nothing because he is my colleague.", tags: ["maar","want","hem","niets"], visuals: ["👨","😓","👤"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik word later astronaut!", en: "I will become an astronaut later!", tags: [], visuals: ["👦","🚀","⭐"] },
              { nl: "Ik word elke dag een beetje beter in tekenen.", en: "I am getting a little better at drawing every day.", tags: ["comparative"], visuals: ["👦","✏️","📈"] }
            ],
            natural: [
              { nl: "Ik word sneller dan Sita, want ik oefen elke dag na school.", en: "I am becoming faster than Sita, because I practise every day after school.", tags: ["want","comparative"], visuals: ["👦","🏃","📅"] },
              { nl: "Ik word moe maar ik ga niet slapen omdat het nog vroeg is.", en: "I am getting tired but I won't sleep because it is still early.", tags: ["maar","omdat"], visuals: ["👦","😴","🕖"] }
            ]
          }
        },
        jij_pres: {
          office: {
            simple: [
              { nl: "Jij wordt steeds beter in presenteren.", en: "You are getting better and better at presenting.", tags: ["comparative"], visuals: ["👤","🎤","📈"] },
              { nl: "Word jij ook moe van al die vergaderingen?", en: "Are you also getting tired of all those meetings?", tags: [], visuals: ["👤","😓","👥"] }
            ],
            natural: [
              { nl: "Jij wordt sneller dan iemand anders in het team, want je werkt zo hard.", en: "You are becoming faster than anyone else in the team, because you work so hard.", tags: ["want","comparative","iemand"], visuals: ["👤","📈","💪"] },
              { nl: "Word jij ook moe terwijl Lars al naar huis is?", en: "Are you also getting tired while Lars has already gone home?", tags: ["terwijl"], visuals: ["👤","😓","👨"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Jij wordt steeds groter!", en: "You are getting taller and taller!", tags: ["comparative"], visuals: ["👤","📏","😊"] },
              { nl: "Word jij later ook dokter zoals je mama?", en: "Will you also become a doctor like your mum?", tags: [], visuals: ["👤","👩‍⚕️","❓"] }
            ],
            natural: [
              { nl: "Jij wordt slimmer dan Hanuman, want jij leest elke dag een boek.", en: "You are becoming smarter than Hanuman, because you read a book every day.", tags: ["want","comparative"], visuals: ["👤","💡","📚"] },
              { nl: "Word jij ook moe terwijl Sita nog speelt?", en: "Are you also getting tired while Sita is still playing?", tags: ["terwijl"], visuals: ["👤","😴","👧"] }
            ]
          }
        },
        hij_pres: {
          office: {
            simple: [
              { nl: "Thomas wordt steeds zelfverzekerder.", en: "Thomas is becoming more and more confident.", tags: ["comparative"], visuals: ["👨","😊","📈"] },
              { nl: "Het project wordt elke dag moeilijker.", en: "The project is getting more difficult every day.", tags: ["comparative"], visuals: ["📋","😓","📅"] }
            ],
            natural: [
              { nl: "Lars wordt beter dan iemand in het team verwachtte, want hij werkt zo hard.", en: "Lars is becoming better than anyone in the team expected, because he works so hard.", tags: ["want","comparative","iemand"], visuals: ["👨","📈","💪"] },
              { nl: "Het wordt drukker dan ooit, maar niemand klaagt.", en: "It is getting busier than ever, but nobody complains.", tags: ["maar","niemand","comparative"], visuals: ["📋","😓","👥"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Hanuman wordt elke dag sterker.", en: "Hanuman gets stronger every day.", tags: ["comparative"], visuals: ["👦","💪","📅"] },
              { nl: "Het weer wordt beter morgen.", en: "The weather is getting better tomorrow.", tags: ["comparative"], visuals: ["☁️","☀️","📅"] }
            ],
            natural: [
              { nl: "Krishna wordt slimmer dan iedereen verwacht, want hij oefent elke dag.", en: "Krishna is becoming smarter than everyone expects, because he practises every day.", tags: ["want","comparative"], visuals: ["👦","💡","📅"] },
              { nl: "Het wordt warmer buiten, maar niemand wil naar binnen.", en: "It is getting warmer outside, but nobody wants to go inside.", tags: ["maar","niemand","comparative"], visuals: ["☀️","🌡️","🌳"] }
            ]
          }
        },
        ik_past: {
          office: {
            simple: [
              { nl: "Ik werd vorig jaar teamleider.", en: "I became team leader last year.", tags: [], visuals: ["👨","🏆","📅"] },
              { nl: "Ik werd steeds beter in mijn werk.", en: "I was getting better and better at my work.", tags: ["comparative"], visuals: ["👨","📈","💼"] }
            ],
            natural: [
              { nl: "Ik werd sneller dan Lars nadat ik een cursus volgde.", en: "I became faster than Lars after I followed a course.", tags: ["comparative"], visuals: ["👨","📈","🎓"] },
              { nl: "Ik werd moe van hem, maar ik zei niets want hij was mijn baas.", en: "I was getting tired of him, but I said nothing because he was my boss.", tags: ["maar","want","hem","niets"], visuals: ["👨","😓","👤"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik werd steeds beter in voetbal.", en: "I was getting better and better at football.", tags: ["comparative"], visuals: ["👦","⚽","📈"] },
              { nl: "Ik werd bang toen het donker werd.", en: "I became scared when it got dark.", tags: [], visuals: ["👦","😨","🌙"] }
            ],
            natural: [
              { nl: "Ik werd sneller dan Sita nadat ik elke dag oefende.", en: "I became faster than Sita after I practised every day.", tags: ["comparative"], visuals: ["👦","🏃","📅"] },
              { nl: "Ik werd moe maar ik ging niet slapen omdat het feest nog bezig was.", en: "I got tired but I didn't sleep because the party was still going.", tags: ["maar","omdat"], visuals: ["👦","😴","🎉"] }
            ]
          }
        },
        rest_past: {
          office: {
            simple: [
              { nl: "Ze werden een beter team na de training.", en: "They became a better team after the training.", tags: ["comparative"], visuals: ["👥","📈","🎓"] },
              { nl: "Lars en Thomas werden allebei moe.", en: "Lars and Thomas both got tired.", tags: [], visuals: ["👨","👨","😓"] }
            ],
            natural: [
              { nl: "Ze werden sneller dan iemand verwachtte, want ze werkten zo hard samen.", en: "They became faster than anyone expected, because they worked so hard together.", tags: ["want","comparative","iemand"], visuals: ["👥","📈","🤝"] },
              { nl: "Ze werden moe, maar niemand ging naar huis voor het werk klaar was.", en: "They got tired, but nobody went home before the work was done.", tags: ["maar","niemand"], visuals: ["👥","😓","🏠"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ze werden allebei heel goed in zwemmen.", en: "They both became very good at swimming.", tags: [], visuals: ["👥","🏊","🌊"] },
              { nl: "Krishna en Sita werden bang van de storm.", en: "Krishna and Sita got scared of the storm.", tags: [], visuals: ["👦","👧","⛈️"] }
            ],
            natural: [
              { nl: "Ze werden sterker dan ooit, want iemand leerde hen elke dag oefenen.", en: "They became stronger than ever, because someone taught them to practise every day.", tags: ["want","comparative","iemand"], visuals: ["👥","💪","📅"] },
              { nl: "Ze werden moe maar niemand wilde stoppen met spelen.", en: "They got tired but nobody wanted to stop playing.", tags: ["maar","niemand"], visuals: ["👥","😴","⚽"] }
            ]
          }
        },
        participle: {
          office: {
            simple: [
              { nl: "Lars is teamleider geworden.", en: "Lars has become team leader.", tags: [], visuals: ["👨","🏆","✅"] },
              { nl: "Het project is moeilijker geworden dan verwacht.", en: "The project has become more difficult than expected.", tags: ["comparative"], visuals: ["📋","😓","📈"] }
            ],
            natural: [
              { nl: "Lotte is de beste manager geworden die iemand hier heeft gehad.", en: "Lotte has become the best manager that anyone here has had.", tags: ["comparative","iemand"], visuals: ["👩","🏆","👥"] },
              { nl: "Het is drukker geworden dan ooit, maar niemand klaagt.", en: "It has become busier than ever, but nobody complains.", tags: ["maar","niemand","comparative"], visuals: ["💼","📈","👥"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Hanuman is sterker geworden dan ooit.", en: "Hanuman has become stronger than ever.", tags: ["comparative"], visuals: ["👦","💪","🏆"] },
              { nl: "Het is kouder geworden buiten.", en: "It has become colder outside.", tags: ["comparative"], visuals: ["🌡️","❄️","🌳"] }
            ],
            natural: [
              { nl: "Krishna is slimmer geworden dan iemand verwachtte, want hij oefent elke dag.", en: "Krishna has become smarter than anyone expected, because he practises every day.", tags: ["want","comparative","iemand"], visuals: ["👦","💡","📚"] },
              { nl: "Het is warmer geworden, maar niemand wil toch naar buiten.", en: "It has become warmer, but nobody wants to go outside anyway.", tags: ["maar","niemand","comparative"], visuals: ["☀️","🌡️","🏠"] }
            ]
          }
        },
        passive_pres: {
          office: {
            simple: [
              { nl: "Het rapport wordt elke week bijgewerkt.", en: "The report is updated every week.", tags: [], visuals: ["📄","🔄","📅"] },
              { nl: "Het systeem wordt door iemand onderhouden.", en: "The system is maintained by someone.", tags: ["iemand"], visuals: ["💻","🔧","👤"] }
            ],
            natural: [
              { nl: "Het project wordt beter beheerd dan vorig jaar, want het team is groter.", en: "The project is being managed better than last year, because the team is bigger.", tags: ["want","comparative"], visuals: ["📋","📈","👥"] },
              { nl: "Het rapport wordt door niemand gelezen, maar Lotte stuurt het toch.", en: "The report is read by nobody, but Lotte sends it anyway.", tags: ["maar","niemand"], visuals: ["📄","👀","📧"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Het verhaal wordt elke avond verteld.", en: "The story is told every evening.", tags: [], visuals: ["📖","🌙","👨‍👩‍👦"] },
              { nl: "Het speelgoed wordt door iemand gemaakt.", en: "The toy is made by someone.", tags: ["iemand"], visuals: ["🧸","🔧","👤"] }
            ],
            natural: [
              { nl: "Het liedje wordt mooier gezongen dan vorig jaar, want ze hebben geoefend.", en: "The song is sung more beautifully than last year, because they have practised.", tags: ["want","comparative"], visuals: ["🎵","👥","📅"] },
              { nl: "Het boek wordt door niemand gelezen, maar Sita vindt het toch mooi.", en: "The book is read by nobody, but Sita still finds it beautiful.", tags: ["maar","niemand"], visuals: ["📚","👧","❤️"] }
            ]
          }
        },
        passive_past: {
          office: {
            simple: [
              { nl: "Het rapport werd gisteren afgewerkt.", en: "The report was finished yesterday.", tags: [], visuals: ["📄","✅","📅"] },
              { nl: "Het werd door iemand anders gedaan.", en: "It was done by someone else.", tags: ["iemand"], visuals: ["✅","👤","📋"] }
            ],
            natural: [
              { nl: "Het project werd sneller afgerond dan verwacht, want iemand extra hielp.", en: "The project was completed faster than expected, because someone extra helped.", tags: ["want","comparative","iemand"], visuals: ["📋","✅","⏰"] },
              { nl: "Het werd door niemand opgemerkt, maar Lotte had het toch gezien.", en: "It was noticed by nobody, but Lotte had still seen it.", tags: ["maar","niemand"], visuals: ["👀","👩","❓"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Het verhaaltje werd gisteren avond verteld.", en: "The little story was told last night.", tags: [], visuals: ["📖","🌙","👨‍👩‍👦"] },
              { nl: "Het werd door iemand in de klas gemaakt.", en: "It was made by someone in the class.", tags: ["iemand"], visuals: ["🎨","👦","🏫"] }
            ],
            natural: [
              { nl: "Het liedje werd mooier gezongen dan ooit, want ze hadden lang geoefend.", en: "The song was sung more beautifully than ever, because they had practised for a long time.", tags: ["want","comparative"], visuals: ["🎵","👥","✨"] },
              { nl: "Het werd door niemand verwacht, maar het resultaat was beter.", en: "It was expected by nobody, but the result was better.", tags: ["maar","niemand","comparative"], visuals: ["😮","✅","🏆"] }
            ]
          }
        }
      }
    },

    // ════════════════════════════════
    // MODAL VERBS
    // ════════════════════════════════
    {
      cat: "Modal Verbs", en: "to be able to", nl: "kunnen", emoji: "💪",
      ik: "kan", jij: "kunt/kan", hij: "kan", pastIk: "kon", pastRest: "konden",
      participle: "gekund", aux: "hebben", pp: "—", pp2: "—",
      sentences: {
        infinitive: {
          office: {
            simple: [
              { nl: "We kunnen morgen vergaderen.", en: "We can meet tomorrow.", tags: [], visuals: ["👥","📅","✅"] },
              { nl: "Ze kunnen hem niet bereiken vandaag.", en: "They cannot reach him today.", tags: ["hem"], visuals: ["👥","📞","👤"] }
            ],
            natural: [
              { nl: "We kunnen dit sneller doen dan vorig jaar, want het team is groter.", en: "We can do this faster than last year, because the team is bigger.", tags: ["want","comparative"], visuals: ["👥","⚡","📈"] },
              { nl: "Ze kunnen haar niet helpen, maar niemand weet waarom.", en: "They cannot help her, but nobody knows why.", tags: ["maar","niemand","haar"], visuals: ["👥","🤷","👩"] }
            ]
          },
          kids: {
            simple: [
              { nl: "We kunnen morgen naar het park gaan.", en: "We can go to the park tomorrow.", tags: [], visuals: ["👥","🌳","📅"] },
              { nl: "Ze kunnen hem niet vinden.", en: "They cannot find him.", tags: ["hem"], visuals: ["👥","🔍","👦"] }
            ],
            natural: [
              { nl: "We kunnen sneller zwemmen dan vorig jaar, want we hebben geoefend.", en: "We can swim faster than last year, because we have practised.", tags: ["want","comparative"], visuals: ["👥","🏊","📈"] },
              { nl: "Ze kunnen haar niet helpen, maar niemand weet waarom.", en: "They cannot help her, but nobody knows why.", tags: ["maar","niemand","haar"], visuals: ["👥","🤷","👧"] }
            ]
          }
        },
        ik_pres: {
          office: {
            simple: [
              { nl: "Ik kan hem morgen bellen.", en: "I can call him tomorrow.", tags: ["hem"], visuals: ["👨","📞","👤"] },
              { nl: "Ik kan niet komen naar de vergadering.", en: "I cannot come to the meeting.", tags: [], visuals: ["👨","👥","❌"] }
            ],
            natural: [
              { nl: "Ik kan sneller werken dan Thomas, want ik heb meer ervaring.", en: "I can work faster than Thomas, because I have more experience.", tags: ["want","comparative"], visuals: ["👨","⚡","👨"] },
              { nl: "Ik kan haar niet bereiken, maar ik stuur hem wel een e-mail.", en: "I cannot reach her, but I do send him an email.", tags: ["maar","haar","hem"], visuals: ["👨","📞","📧"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik kan al fietsen zonder hulp!", en: "I can already cycle without help!", tags: [], visuals: ["👦","🚲","⭐"] },
              { nl: "Ik kan niet zwemmen zonder Hanuman.", en: "I cannot swim without Hanuman.", tags: [], visuals: ["👦","🏊","👦"] }
            ],
            natural: [
              { nl: "Ik kan sneller rennen dan Sita, want ik oefen elke dag.", en: "I can run faster than Sita, because I practise every day.", tags: ["want","comparative"], visuals: ["👦","🏃","📅"] },
              { nl: "Ik kan haar niet helpen, maar ik vraag het aan Hanuman.", en: "I cannot help her, but I ask Hanuman.", tags: ["maar","haar"], visuals: ["👦","🤷","👦"] }
            ]
          }
        },
        jij_pres: {
          office: {
            simple: [
              { nl: "Kan jij hem even bellen?", en: "Can you give him a call?", tags: ["hem"], visuals: ["👤","📞","👨"] },
              { nl: "Jij kunt dit beter dan iemand anders.", en: "You can do this better than anyone else.", tags: ["comparative","iemand"], visuals: ["👤","⭐","👥"] }
            ],
            natural: [
              { nl: "Kan jij haar rapport lezen terwijl ik de vergadering leid?", en: "Can you read her report while I lead the meeting?", tags: ["terwijl","haar"], visuals: ["👤","📄","👥"] },
              { nl: "Jij kunt dit sneller dan iemand anders, want je doet het al jaren.", en: "You can do this faster than anyone else, because you have been doing it for years.", tags: ["want","comparative","iemand"], visuals: ["👤","⚡","📅"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Kan jij al lezen?", en: "Can you already read?", tags: [], visuals: ["👤","📚","❓"] },
              { nl: "Jij kunt dit beter dan mij!", en: "You can do this better than me!", tags: ["comparative","mij"], visuals: ["👤","⭐","👦"] }
            ],
            natural: [
              { nl: "Kan jij hem helpen terwijl ik mijn huiswerk maak?", en: "Can you help him while I do my homework?", tags: ["terwijl","hem"], visuals: ["👤","🤝","✏️"] },
              { nl: "Jij kunt sneller fietsen dan iemand anders, want je oefent elke dag.", en: "You can cycle faster than anyone else, because you practise every day.", tags: ["want","comparative","iemand"], visuals: ["👤","🚲","📅"] }
            ]
          }
        },
        hij_pres: {
          office: {
            simple: [
              { nl: "Lars kan drie talen spreken.", en: "Lars can speak three languages.", tags: [], visuals: ["👨","🗣️","🌍"] },
              { nl: "Thomas kan hem niet helpen vandaag.", en: "Thomas cannot help him today.", tags: ["hem"], visuals: ["👨","🤷","👤"] }
            ],
            natural: [
              { nl: "Lars kan sneller typen dan iemand anders, want hij oefent elke dag.", en: "Lars can type faster than anyone else, because he practises every day.", tags: ["want","comparative","iemand"], visuals: ["👨","⌨️","📈"] },
              { nl: "Hij kan haar niet bereiken, maar hij stuurt ons wel een bericht.", en: "He cannot reach her, but he does send us a message.", tags: ["maar","haar","ons"], visuals: ["👨","📞","📱"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Hanuman kan heel hoog springen.", en: "Hanuman can jump very high.", tags: [], visuals: ["👦","⬆️","🏆"] },
              { nl: "Krishna kan hem niet vinden in het park.", en: "Krishna cannot find him in the park.", tags: ["hem"], visuals: ["👦","🔍","🌳"] }
            ],
            natural: [
              { nl: "Hanuman kan sneller rennen dan iemand anders, want hij is de sterkste.", en: "Hanuman can run faster than anyone else, because he is the strongest.", tags: ["want","comparative","iemand"], visuals: ["👦","🏃","💪"] },
              { nl: "Hij kan haar niet helpen, maar hij vraagt het aan iemand anders.", en: "He cannot help her, but he asks someone else.", tags: ["maar","haar","iemand"], visuals: ["👦","🤷","👤"] }
            ]
          }
        },
        ik_past: {
          office: {
            simple: [
              { nl: "Ik kon hem gisteren niet bereiken.", en: "I could not reach him yesterday.", tags: ["hem"], visuals: ["👨","📞","👤"] },
              { nl: "Ik kon vroeger niet zo snel typen.", en: "I could not type so fast before.", tags: ["comparative"], visuals: ["👨","⌨️","📅"] }
            ],
            natural: [
              { nl: "Ik kon haar niet bellen, want mijn telefoon was kapot.", en: "I could not call her, because my phone was broken.", tags: ["want","haar"], visuals: ["👨","📞","📱"] },
              { nl: "Ik kon sneller werken dan Thomas nadat ik de cursus had gevolgd.", en: "I could work faster than Thomas after I had followed the course.", tags: ["comparative"], visuals: ["👨","⚡","🎓"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik kon vroeger niet fietsen.", en: "I could not cycle before.", tags: [], visuals: ["👦","🚲","📅"] },
              { nl: "Ik kon hem niet vinden in de tuin.", en: "I could not find him in the garden.", tags: ["hem"], visuals: ["👦","🔍","🌳"] }
            ],
            natural: [
              { nl: "Ik kon sneller zwemmen dan Sita nadat ik had geoefend.", en: "I could swim faster than Sita after I had practised.", tags: ["comparative"], visuals: ["👦","🏊","📈"] },
              { nl: "Ik kon haar niet helpen, want ik had mijn huiswerk nog niet af.", en: "I could not help her, because I had not finished my homework yet.", tags: ["want","haar"], visuals: ["👦","📚","👧"] }
            ]
          }
        },
        rest_past: {
          office: {
            simple: [
              { nl: "Ze konden hem niet bereiken gisteren.", en: "They could not reach him yesterday.", tags: ["hem"], visuals: ["👥","📞","👤"] },
              { nl: "Lars en Lotte konden beter samenwerken dan vorig jaar.", en: "Lars and Lotte could collaborate better than last year.", tags: ["comparative"], visuals: ["👨","👩","🤝"] }
            ],
            natural: [
              { nl: "Ze konden sneller werken dan iemand verwachtte, want ze hadden geoefend.", en: "They could work faster than anyone expected, because they had practised.", tags: ["want","comparative","iemand"], visuals: ["👥","⚡","📅"] },
              { nl: "Ze konden haar niet helpen, maar niemand wist waarom.", en: "They could not help her, but nobody knew why.", tags: ["maar","niemand","haar"], visuals: ["👥","🤷","👩"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ze konden gisteren niet buiten spelen.", en: "They could not play outside yesterday.", tags: [], visuals: ["👥","🌳","☔"] },
              { nl: "Krishna en Sita konden hem niet vinden.", en: "Krishna and Sita could not find him.", tags: ["hem"], visuals: ["👦","👧","🔍"] }
            ],
            natural: [
              { nl: "Ze konden sneller zwemmen dan iemand dacht, want ze hadden lang geoefend.", en: "They could swim faster than anyone thought, because they had practised for a long time.", tags: ["want","comparative","iemand"], visuals: ["👥","🏊","📅"] },
              { nl: "Ze konden haar niet helpen, maar niemand wist wat ze moesten doen.", en: "They could not help her, but nobody knew what to do.", tags: ["maar","niemand","haar"], visuals: ["👥","🤷","👧"] }
            ]
          }
        },
        participle: {
          office: {
            simple: [
              { nl: "Ik heb hem eindelijk bereikt.", en: "I have finally reached him.", tags: ["hem"], visuals: ["👨","📞","✅"] },
              { nl: "We hebben meer gedaan dan we konden.", en: "We have done more than we could.", tags: ["comparative"], visuals: ["👥","✅","📈"] }
            ],
            natural: [
              { nl: "Lotte heeft meer bereikt dan iemand verwachtte, want ze werkte zo hard.", en: "Lotte has achieved more than anyone expected, because she worked so hard.", tags: ["want","comparative","iemand"], visuals: ["👩","🏆","💼"] },
              { nl: "We hebben haar niet bereikt, maar we hebben hem wel gesproken.", en: "We have not reached her, but we have spoken to him.", tags: ["maar","haar","hem"], visuals: ["👥","📞","👤"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik heb vandaag beter gefietst dan gisteren!", en: "I have cycled better today than yesterday!", tags: ["comparative"], visuals: ["👦","🚲","🏆"] },
              { nl: "We hebben hem eindelijk gevonden!", en: "We have finally found him!", tags: ["hem"], visuals: ["👥","🔍","✅"] }
            ],
            natural: [
              { nl: "Hanuman heeft meer bereikt dan iemand ooit verwachtte, want hij nooit opgeeft.", en: "Hanuman has achieved more than anyone ever expected, because he never gives up.", tags: ["want","comparative","iemand"], visuals: ["👦","🏆","💪"] },
              { nl: "We hebben haar niet gevonden, maar we hebben hem wel gezien.", en: "We have not found her, but we have seen him.", tags: ["maar","haar","hem"], visuals: ["👥","🔍","👤"] }
            ]
          }
        },
        passive_pres: { office: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] }, kids: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] } },
        passive_past: { office: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] }, kids: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] } }
      }
    },

    // ─── gaan ───
    {
      cat: "Movement", en: "to go", nl: "gaan", emoji: "🚶",
      ik: "ga", jij: "gaat", hij: "gaat", pastIk: "ging", pastRest: "gingen",
      participle: "gegaan", aux: "zijn", pp: "—", pp2: "—",
      sentences: {
        infinitive: {
          office: {
            simple: [
              { nl: "We gaan morgen naar Brussel voor een meeting.", en: "We are going to Brussels tomorrow for a meeting.", tags: [], visuals: ["👥","🏙️","📅"] },
              { nl: "Ze gaan samen lunchen in de stad.", en: "They are going to have lunch together in the city.", tags: [], visuals: ["👥","🍽️","🏙️"] }
            ],
            natural: [
              { nl: "We gaan eerder naar huis dan gewoonlijk, want niemand heeft meer werk.", en: "We are going home earlier than usual, because nobody has more work.", tags: ["want","niemand","comparative"], visuals: ["👥","🏠","⏰"] },
              { nl: "Lars en Thomas gaan naar de vergadering, maar Lotte blijft op kantoor.", en: "Lars and Thomas are going to the meeting, but Lotte stays at the office.", tags: ["maar"], visuals: ["👨","👨","👩"] }
            ]
          },
          kids: {
            simple: [
              { nl: "We gaan morgen naar het strand!", en: "We are going to the beach tomorrow!", tags: [], visuals: ["👥","🏖️","☀️"] },
              { nl: "Ze gaan samen naar school.", en: "They are going to school together.", tags: [], visuals: ["👥","🏫","🎒"] }
            ],
            natural: [
              { nl: "We gaan vroeger naar het park dan gisteren, want het is mooier weer.", en: "We are going to the park earlier than yesterday, because the weather is nicer.", tags: ["want","comparative"], visuals: ["👥","🌳","☀️"] },
              { nl: "Krishna en Sita gaan zwemmen, maar Hanuman gaat mee om te helpen.", en: "Krishna and Sita are going swimming, but Hanuman comes along to help.", tags: ["maar"], visuals: ["👦","👧","👦"] }
            ]
          }
        },
        ik_pres: {
          office: {
            simple: [
              { nl: "Ik ga nu naar huis.", en: "I am going home now.", tags: [], visuals: ["👨","🏠","👋"] },
              { nl: "Ik ga morgen naar de vergadering met hem.", en: "I am going to the meeting with him tomorrow.", tags: ["hem"], visuals: ["👨","👥","📅"] }
            ],
            natural: [
              { nl: "Ik ga vroeger naar huis dan gewoonlijk, want niemand is er meer.", en: "I am going home earlier than usual, because nobody is there anymore.", tags: ["want","niemand","comparative"], visuals: ["👨","🏠","⏰"] },
              { nl: "Ik ga naar haar kantoor, maar ik weet niet of ze er is.", en: "I am going to her office, but I don't know if she is there.", tags: ["maar","haar"], visuals: ["👨","🚶","🏢"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik ga naar het park met Sita.", en: "I am going to the park with Sita.", tags: [], visuals: ["👦","🌳","👧"] },
              { nl: "Ik ga niet mee want ik ben moe.", en: "I am not coming along because I am tired.", tags: ["want"], visuals: ["👦","😴","🏠"] }
            ],
            natural: [
              { nl: "Ik ga vroeger naar bed dan gisteren, want ik ben heel moe.", en: "I am going to bed earlier than yesterday, because I am very tired.", tags: ["want","comparative"], visuals: ["👦","🛏️","⏰"] },
              { nl: "Ik ga naar haar huis, maar ik weet niet of iemand er is.", en: "I am going to her house, but I don't know if anyone is there.", tags: ["maar","haar","iemand"], visuals: ["👦","🚶","🏠"] }
            ]
          }
        },
        jij_pres: {
          office: {
            simple: [
              { nl: "Gaat jij ook mee naar de vergadering?", en: "Are you also coming to the meeting?", tags: [], visuals: ["👤","👥","❓"] },
              { nl: "Jij gaat altijd als eerste naar huis.", en: "You always go home first.", tags: [], visuals: ["👤","🏠","🥇"] }
            ],
            natural: [
              { nl: "Gaat jij ook naar Brussel terwijl wij hier vergaderen?", en: "Are you also going to Brussels while we are meeting here?", tags: ["terwijl"], visuals: ["👤","🏙️","👥"] },
              { nl: "Jij gaat vroeger naar huis dan iemand anders, want je hebt een trein.", en: "You go home earlier than anyone else, because you have a train.", tags: ["want","comparative","iemand"], visuals: ["👤","🏠","🚂"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Gaat jij ook mee naar het strand?", en: "Are you also coming to the beach?", tags: [], visuals: ["👤","🏖️","❓"] },
              { nl: "Jij gaat altijd als eerste naar bed.", en: "You always go to bed first.", tags: [], visuals: ["👤","🛏️","🥇"] }
            ],
            natural: [
              { nl: "Gaat jij ook naar het park terwijl wij hier spelen?", en: "Are you also going to the park while we play here?", tags: ["terwijl"], visuals: ["👤","🌳","👥"] },
              { nl: "Jij gaat vroeger naar huis dan iemand anders, want het is al laat.", en: "You go home earlier than anyone else, because it is already late.", tags: ["want","comparative","iemand"], visuals: ["👤","🏠","🌙"] }
            ]
          }
        },
        hij_pres: {
          office: {
            simple: [
              { nl: "Lars gaat naar Antwerpen voor een klant.", en: "Lars is going to Antwerp for a client.", tags: [], visuals: ["👨","🏙️","💼"] },
              { nl: "Thomas gaat elke dag met de fiets naar kantoor.", en: "Thomas goes to the office by bike every day.", tags: [], visuals: ["👨","🚲","🏢"] }
            ],
            natural: [
              { nl: "Lars gaat vroeger dan iemand anders, want hij heeft een vergadering in Gent.", en: "Lars goes earlier than anyone else, because he has a meeting in Ghent.", tags: ["want","comparative","iemand"], visuals: ["👨","⏰","🏙️"] },
              { nl: "Hij gaat naar haar bureau, maar ze is er niet.", en: "He goes to her desk, but she is not there.", tags: ["maar","haar"], visuals: ["👨","🚶","👩"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Hanuman gaat elke dag naar het bos om te oefenen.", en: "Hanuman goes to the forest every day to practise.", tags: [], visuals: ["👦","🌲","💪"] },
              { nl: "Krishna gaat naar Sita om haar te helpen.", en: "Krishna goes to Sita to help her.", tags: ["haar"], visuals: ["👦","🚶","👧"] }
            ],
            natural: [
              { nl: "Hanuman gaat vroeger dan iemand anders, want hij heeft veel te doen.", en: "Hanuman goes earlier than anyone else, because he has a lot to do.", tags: ["want","comparative","iemand"], visuals: ["👦","⏰","🌲"] },
              { nl: "Hij gaat naar haar huis, maar niemand doet de deur open.", en: "He goes to her house, but nobody opens the door.", tags: ["maar","haar","niemand"], visuals: ["👦","🏠","🚪"] }
            ]
          }
        },
        ik_past: {
          office: {
            simple: [
              { nl: "Ik ging gisteren te voet naar kantoor.", en: "I walked to the office yesterday.", tags: [], visuals: ["👨","🚶","🏢"] },
              { nl: "Ik ging naar de vergadering met hem.", en: "I went to the meeting with him.", tags: ["hem"], visuals: ["👨","👥","👤"] }
            ],
            natural: [
              { nl: "Ik ging vroeger naar huis dan gewoonlijk, want niemand was er meer.", en: "I went home earlier than usual, because nobody was there anymore.", tags: ["want","niemand","comparative"], visuals: ["👨","🏠","⏰"] },
              { nl: "Ik ging naar haar kantoor, maar ze was al weg.", en: "I went to her office, but she was already gone.", tags: ["maar","haar"], visuals: ["👨","🏢","👩"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik ging gisteren naar het park met Sita.", en: "I went to the park with Sita yesterday.", tags: [], visuals: ["👦","🌳","👧"] },
              { nl: "Ik ging niet mee want ik was ziek.", en: "I did not go along because I was sick.", tags: ["want"], visuals: ["👦","🤒","🏠"] }
            ],
            natural: [
              { nl: "Ik ging vroeger naar bed dan gisteren, want ik was heel moe.", en: "I went to bed earlier than yesterday, because I was very tired.", tags: ["want","comparative"], visuals: ["👦","🛏️","⏰"] },
              { nl: "Ik ging naar haar huis, maar niemand was er.", en: "I went to her house, but nobody was there.", tags: ["maar","haar","niemand"], visuals: ["👦","🏠","❓"] }
            ]
          }
        },
        rest_past: {
          office: {
            simple: [
              { nl: "Ze gingen gisteren samen naar de klant.", en: "They went to the client together yesterday.", tags: [], visuals: ["👥","🚶","💼"] },
              { nl: "Lars en Thomas gingen met de trein naar Brussel.", en: "Lars and Thomas went to Brussels by train.", tags: [], visuals: ["👨","👨","🚂"] }
            ],
            natural: [
              { nl: "Ze gingen vroeger dan iemand verwachtte, want het werk was al klaar.", en: "They went earlier than anyone expected, because the work was already done.", tags: ["want","comparative","iemand"], visuals: ["👥","⏰","✅"] },
              { nl: "Ze gingen naar haar kantoor, maar niemand was er.", en: "They went to her office, but nobody was there.", tags: ["maar","haar","niemand"], visuals: ["👥","🏢","❓"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ze gingen gisteren samen naar het strand.", en: "They went to the beach together yesterday.", tags: [], visuals: ["👥","🏖️","☀️"] },
              { nl: "Krishna en Sita gingen naar het bos met Hanuman.", en: "Krishna and Sita went to the forest with Hanuman.", tags: [], visuals: ["👦","👧","🌲"] }
            ],
            natural: [
              { nl: "Ze gingen vroeger dan iemand anders, want het begon te regenen.", en: "They went earlier than anyone else, because it started to rain.", tags: ["want","comparative","iemand"], visuals: ["👥","⏰","🌧️"] },
              { nl: "Ze gingen naar haar huis, maar niemand deed de deur open.", en: "They went to her house, but nobody opened the door.", tags: ["maar","haar","niemand"], visuals: ["👥","🏠","🚪"] }
            ]
          }
        },
        participle: {
          office: {
            simple: [
              { nl: "Lars is al naar huis gegaan.", en: "Lars has already gone home.", tags: [], visuals: ["👨","🏠","✅"] },
              { nl: "We zijn gisteren naar Gent gegaan.", en: "We went to Ghent yesterday.", tags: [], visuals: ["👥","🏙️","📅"] }
            ],
            natural: [
              { nl: "Lotte is vroeger gegaan dan iemand anders, want ze had een trein.", en: "Lotte has gone earlier than anyone else, because she had a train.", tags: ["want","comparative","iemand"], visuals: ["👩","⏰","🚂"] },
              { nl: "Ze zijn naar haar kantoor gegaan, maar niemand was er.", en: "They have gone to her office, but nobody was there.", tags: ["maar","haar","niemand"], visuals: ["👥","🏢","❓"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Hanuman is al naar het bos gegaan.", en: "Hanuman has already gone to the forest.", tags: [], visuals: ["👦","🌲","✅"] },
              { nl: "We zijn gisteren naar het strand gegaan.", en: "We went to the beach yesterday.", tags: [], visuals: ["👥","🏖️","📅"] }
            ],
            natural: [
              { nl: "Sita is vroeger gegaan dan iemand anders, want haar mama riep haar.", en: "Sita has gone earlier than anyone else, because her mum called her.", tags: ["want","comparative","iemand","haar"], visuals: ["👧","⏰","👩"] },
              { nl: "Ze zijn naar haar huis gegaan, maar niemand was er.", en: "They have gone to her house, but nobody was there.", tags: ["maar","haar","niemand"], visuals: ["👥","🏠","❓"] }
            ]
          }
        },
        passive_pres: { office: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] }, kids: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] } },
        passive_past: { office: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] }, kids: { simple: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }], natural: [{ nl:"—", en:"Not applicable", tags:[], visuals:[] },{ nl:"—", en:"Not applicable", tags:[], visuals:[] }] } }
      }
    },

    // ─── werken ───
    {
      cat: "Daily & Office Actions", en: "to work", nl: "werken", emoji: "💼",
      ik: "werk", jij: "werkt", hij: "werkt", pastIk: "werkte", pastRest: "werkten",
      participle: "gewerkt", aux: "hebben", pp: "wordt gewerkt", pp2: "werd gewerkt",
      sentences: {
        infinitive: {
          office: {
            simple: [
              { nl: "We werken elke dag samen aan het project.", en: "We work together on the project every day.", tags: [], visuals: ["👥","💼","📋"] },
              { nl: "Ze werken hard om de deadline te halen.", en: "They work hard to meet the deadline.", tags: [], visuals: ["👥","💪","📅"] }
            ],
            natural: [
              { nl: "We werken harder dan vorig jaar, maar de resultaten zijn ook beter.", en: "We work harder than last year, but the results are also better.", tags: ["maar","comparative"], visuals: ["👥","💪","📈"] },
              { nl: "Ze werken efficiënter dan iemand verwachtte, want het team is hechter geworden.", en: "They work more efficiently than anyone expected, because the team has become closer.", tags: ["want","comparative","iemand"], visuals: ["👥","⚡","🤝"] }
            ]
          },
          kids: {
            simple: [
              { nl: "We werken samen aan ons schoolproject.", en: "We work together on our school project.", tags: ["ons"], visuals: ["👥","📚","🏫"] },
              { nl: "Ze werken hard om hun huiswerk af te krijgen.", en: "They work hard to finish their homework.", tags: [], visuals: ["👥","✏️","📚"] }
            ],
            natural: [
              { nl: "We werken harder dan gisteren, want de juf kijkt mee.", en: "We work harder than yesterday, because the teacher is watching.", tags: ["want","comparative"], visuals: ["👥","💪","👩‍🏫"] },
              { nl: "Ze werken beter samen dan iemand dacht, want ze zijn goede vrienden.", en: "They work together better than anyone thought, because they are good friends.", tags: ["want","comparative","iemand"], visuals: ["👥","🤝","❤️"] }
            ]
          }
        },
        ik_pres: {
          office: {
            simple: [
              { nl: "Ik werk elke dag van negen tot vijf.", en: "I work every day from nine to five.", tags: [], visuals: ["👨","⏰","💼"] },
              { nl: "Ik werk graag samen met haar.", en: "I like to work together with her.", tags: ["haar"], visuals: ["👨","🤝","👩"] }
            ],
            natural: [
              { nl: "Ik werk harder dan Thomas, maar ik verdien niet meer dan hem.", en: "I work harder than Thomas, but I don't earn more than him.", tags: ["maar","comparative","hem"], visuals: ["👨","💪","👨"] },
              { nl: "Ik werk thuis vandaag omdat niemand op kantoor is.", en: "I am working from home today because nobody is at the office.", tags: ["omdat","niemand"], visuals: ["👨","🏠","💻"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik werk elke dag aan mijn tekening.", en: "I work on my drawing every day.", tags: [], visuals: ["👦","✏️","🎨"] },
              { nl: "Ik werk graag samen met Sita.", en: "I like to work together with Sita.", tags: [], visuals: ["👦","🤝","👧"] }
            ],
            natural: [
              { nl: "Ik werk harder dan gisteren, want de juf geeft me een ster.", en: "I work harder than yesterday, because the teacher gives me a star.", tags: ["want","comparative"], visuals: ["👦","💪","⭐"] },
              { nl: "Ik werk thuis vandaag omdat niemand buiten speelt.", en: "I am working at home today because nobody is playing outside.", tags: ["omdat","niemand"], visuals: ["👦","🏠","✏️"] }
            ]
          }
        },
        jij_pres: {
          office: {
            simple: [
              { nl: "Jij werkt altijd heel hard.", en: "You always work very hard.", tags: [], visuals: ["👤","💪","💼"] },
              { nl: "Werk jij vandaag samen met hem?", en: "Are you working together with him today?", tags: ["hem"], visuals: ["👤","🤝","👨"] }
            ],
            natural: [
              { nl: "Jij werkt harder dan iemand anders hier, want je bent altijd als eerste klaar.", en: "You work harder than anyone else here, because you are always the first to finish.", tags: ["want","comparative","iemand"], visuals: ["👤","💪","🥇"] },
              { nl: "Werk jij thuis terwijl Lars op kantoor zit?", en: "Are you working from home while Lars is at the office?", tags: ["terwijl"], visuals: ["👤","🏠","👨"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Jij werkt altijd heel netjes.", en: "You always work very neatly.", tags: [], visuals: ["👤","✏️","⭐"] },
              { nl: "Werk jij samen met Hanuman?", en: "Are you working together with Hanuman?", tags: [], visuals: ["👤","🤝","👦"] }
            ],
            natural: [
              { nl: "Jij werkt harder dan iemand anders in de klas, want je wil de beste zijn.", en: "You work harder than anyone else in the class, because you want to be the best.", tags: ["want","comparative","iemand"], visuals: ["👤","💪","🏆"] },
              { nl: "Werk jij aan je project terwijl Sita buiten speelt?", en: "Are you working on your project while Sita plays outside?", tags: ["terwijl"], visuals: ["👤","📚","👧"] }
            ]
          }
        },
        hij_pres: {
          office: {
            simple: [
              { nl: "Lars werkt elke dag tot zes uur.", en: "Lars works until six o'clock every day.", tags: [], visuals: ["👨","⏰","💼"] },
              { nl: "Thomas werkt graag samen met haar.", en: "Thomas likes to work together with her.", tags: ["haar"], visuals: ["👨","🤝","👩"] }
            ],
            natural: [
              { nl: "Lars werkt harder dan iemand anders, want hij wil promotie.", en: "Lars works harder than anyone else, because he wants a promotion.", tags: ["want","comparative","iemand"], visuals: ["👨","💪","🏆"] },
              { nl: "Hij werkt thuis vandaag omdat niemand op kantoor is.", en: "He is working from home today because nobody is at the office.", tags: ["omdat","niemand"], visuals: ["👨","🏠","💻"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Hanuman werkt elke dag heel hard.", en: "Hanuman works very hard every day.", tags: [], visuals: ["👦","💪","📅"] },
              { nl: "Krishna werkt graag samen met Sita.", en: "Krishna likes to work together with Sita.", tags: [], visuals: ["👦","🤝","👧"] }
            ],
            natural: [
              { nl: "Hanuman werkt harder dan iemand anders, want hij wil de sterkste zijn.", en: "Hanuman works harder than anyone else, because he wants to be the strongest.", tags: ["want","comparative","iemand"], visuals: ["👦","💪","🏆"] },
              { nl: "Hij werkt aan zijn tekening terwijl Sita buiten speelt.", en: "He works on his drawing while Sita plays outside.", tags: ["terwijl"], visuals: ["👦","✏️","👧"] }
            ]
          }
        },
        ik_past: {
          office: {
            simple: [
              { nl: "Ik werkte gisteren tot zeven uur.", en: "I worked until seven o'clock yesterday.", tags: [], visuals: ["👨","⏰","💼"] },
              { nl: "Ik werkte graag samen met haar.", en: "I liked to work together with her.", tags: ["haar"], visuals: ["👨","🤝","👩"] }
            ],
            natural: [
              { nl: "Ik werkte harder dan Thomas, want de deadline was de volgende dag.", en: "I worked harder than Thomas, because the deadline was the next day.", tags: ["want","comparative"], visuals: ["👨","💪","📅"] },
              { nl: "Ik werkte thuis gisteren omdat niemand op kantoor was.", en: "I worked from home yesterday because nobody was at the office.", tags: ["omdat","niemand"], visuals: ["👨","🏠","💻"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ik werkte gisteren heel hard aan mijn tekening.", en: "I worked very hard on my drawing yesterday.", tags: [], visuals: ["👦","✏️","🎨"] },
              { nl: "Ik werkte graag samen met Sita.", en: "I liked to work together with Sita.", tags: [], visuals: ["👦","🤝","👧"] }
            ],
            natural: [
              { nl: "Ik werkte harder dan gisteren, want ik wilde de beste tekening maken.", en: "I worked harder than yesterday, because I wanted to make the best drawing.", tags: ["want","comparative"], visuals: ["👦","💪","🎨"] },
              { nl: "Ik werkte thuis gisteren omdat niemand buiten speelde.", en: "I worked at home yesterday because nobody was playing outside.", tags: ["omdat","niemand"], visuals: ["👦","🏠","✏️"] }
            ]
          }
        },
        rest_past: {
          office: {
            simple: [
              { nl: "Ze werkten gisteren tot laat op kantoor.", en: "They worked late at the office yesterday.", tags: [], visuals: ["👥","🏢","🌙"] },
              { nl: "Lars en Lotte werkten goed samen.", en: "Lars and Lotte worked well together.", tags: [], visuals: ["👨","👩","🤝"] }
            ],
            natural: [
              { nl: "Ze werkten harder dan iemand verwachtte, want de deadline was dichterbij.", en: "They worked harder than anyone expected, because the deadline was closer.", tags: ["want","comparative","iemand"], visuals: ["👥","💪","📅"] },
              { nl: "Ze werkten thuis gisteren omdat niemand op kantoor was.", en: "They worked from home yesterday because nobody was at the office.", tags: ["omdat","niemand"], visuals: ["👥","🏠","💻"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Ze werkten gisteren samen aan hun project.", en: "They worked together on their project yesterday.", tags: [], visuals: ["👥","📚","🏫"] },
              { nl: "Krishna en Hanuman werkten heel hard.", en: "Krishna and Hanuman worked very hard.", tags: [], visuals: ["👦","👦","💪"] }
            ],
            natural: [
              { nl: "Ze werkten harder dan iemand dacht, want ze wilden de beste zijn.", en: "They worked harder than anyone thought, because they wanted to be the best.", tags: ["want","comparative","iemand"], visuals: ["👥","💪","🏆"] },
              { nl: "Ze werkten thuis gisteren omdat niemand buiten speelde.", en: "They worked at home yesterday because nobody was playing outside.", tags: ["omdat","niemand"], visuals: ["👥","🏠","✏️"] }
            ]
          }
        },
        participle: {
          office: {
            simple: [
              { nl: "Lars heeft vandaag heel hard gewerkt.", en: "Lars has worked very hard today.", tags: [], visuals: ["👨","💪","✅"] },
              { nl: "We hebben samen aan het project gewerkt.", en: "We have worked on the project together.", tags: [], visuals: ["👥","📋","🤝"] }
            ],
            natural: [
              { nl: "Lotte heeft harder gewerkt dan iemand anders dit jaar.", en: "Lotte has worked harder than anyone else this year.", tags: ["comparative","iemand"], visuals: ["👩","💪","🏆"] },
              { nl: "We hebben thuis gewerkt omdat niemand op kantoor was.", en: "We have worked from home because nobody was at the office.", tags: ["omdat","niemand"], visuals: ["👥","🏠","💻"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Hanuman heeft vandaag heel hard gewerkt.", en: "Hanuman has worked very hard today.", tags: [], visuals: ["👦","💪","✅"] },
              { nl: "We hebben samen aan ons project gewerkt.", en: "We have worked on our project together.", tags: ["ons"], visuals: ["👥","📚","🤝"] }
            ],
            natural: [
              { nl: "Sita heeft harder gewerkt dan iemand anders in de klas.", en: "Sita has worked harder than anyone else in the class.", tags: ["comparative","iemand"], visuals: ["👧","💪","🏆"] },
              { nl: "We hebben thuis gewerkt omdat niemand buiten speelde.", en: "We have worked at home because nobody was playing outside.", tags: ["omdat","niemand"], visuals: ["👥","🏠","✏️"] }
            ]
          }
        },
        passive_pres: {
          office: {
            simple: [
              { nl: "Er wordt hard gewerkt op kantoor.", en: "There is hard work being done at the office.", tags: [], visuals: ["🏢","💪","📋"] },
              { nl: "Het project wordt door iemand afgewerkt.", en: "The project is being finished by someone.", tags: ["iemand"], visuals: ["📋","👤","✅"] }
            ],
            natural: [
              { nl: "Er wordt harder gewerkt dan vorig jaar, want de deadlines zijn strikter.", en: "There is harder work being done than last year, because the deadlines are stricter.", tags: ["want","comparative"], visuals: ["💪","📈","📅"] },
              { nl: "Het project wordt door niemand afgewerkt, maar Lotte lost het op.", en: "The project is being finished by nobody, but Lotte solves it.", tags: ["maar","niemand"], visuals: ["📋","👩","✅"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Er wordt hard gewerkt in de klas.", en: "There is hard work being done in the class.", tags: [], visuals: ["🏫","💪","✏️"] },
              { nl: "Het project wordt door iemand afgewerkt.", en: "The project is being finished by someone.", tags: ["iemand"], visuals: ["📚","👤","✅"] }
            ],
            natural: [
              { nl: "Er wordt harder gewerkt dan gisteren, want de juf kijkt mee.", en: "There is harder work being done than yesterday, because the teacher is watching.", tags: ["want","comparative"], visuals: ["💪","📈","👩‍🏫"] },
              { nl: "Het project wordt door niemand afgewerkt, maar Hanuman helpt iedereen.", en: "The project is being finished by nobody, but Hanuman helps everyone.", tags: ["maar","niemand"], visuals: ["📚","👦","🤝"] }
            ]
          }
        },
        passive_past: {
          office: {
            simple: [
              { nl: "Er werd gisteren hard gewerkt op kantoor.", en: "There was hard work done at the office yesterday.", tags: [], visuals: ["🏢","💪","📅"] },
              { nl: "Het project werd door iemand afgewerkt.", en: "The project was finished by someone.", tags: ["iemand"], visuals: ["📋","👤","✅"] }
            ],
            natural: [
              { nl: "Er werd harder gewerkt dan ooit, want de deadline was de volgende dag.", en: "There was harder work done than ever, because the deadline was the next day.", tags: ["want","comparative"], visuals: ["💪","📅","⏰"] },
              { nl: "Het project werd door niemand afgewerkt, maar Lotte loste het op.", en: "The project was finished by nobody, but Lotte solved it.", tags: ["maar","niemand"], visuals: ["📋","👩","✅"] }
            ]
          },
          kids: {
            simple: [
              { nl: "Er werd gisteren hard gewerkt in de klas.", en: "There was hard work done in the class yesterday.", tags: [], visuals: ["🏫","💪","📅"] },
              { nl: "Het project werd door iemand afgewerkt.", en: "The project was finished by someone.", tags: ["iemand"], visuals: ["📚","👤","✅"] }
            ],
            natural: [
              { nl: "Er werd harder gewerkt dan ooit, want de juf gaf een prijs.", en: "There was harder work done than ever, because the teacher gave a prize.", tags: ["want","comparative"], visuals: ["💪","📅","🏆"] },
              { nl: "Het project werd door niemand afgewerkt, maar Hanuman hielp iedereen.", en: "The project was finished by nobody, but Hanuman helped everyone.", tags: ["maar","niemand"], visuals: ["📚","👦","🤝"] }
            ]
          }
        }
      }
    }

    // NOTE: Remaining 34 verbs follow the same pattern
    // They will be added in the next build iteration

  ],

  // Story intros per category
  stories: {
    office: {
      "Being & Having": "Lars arrives at the Ghent tech office on a grey Monday. Lotte, his manager, is already at her desk reviewing reports. Thomas, the new intern, isn't sure where to sit yet.",
      "Modal Verbs": "The project deadline is approaching. Lars needs to decide what the team can and must do. Thomas wants to help but isn't sure what he's allowed to do yet.",
      "Movement": "A busy Tuesday in the Ghent office. Lars cycles in from the Korenmarkt, Lotte drives from Antwerp, and Thomas arrives by tram — all heading to the same meeting.",
      "Communication": "The afternoon is full of calls and emails. Lotte speaks with a client in Brussels, Lars asks Thomas a question, and Thomas tries to answer without making mistakes.",
      "Daily & Office Actions": "It's Wednesday — the middle of the week. Lars works on the report, Lotte makes decisions, Thomas helps wherever he can, and they all try to understand the new system.",
      "Perception & Thinking": "Friday afternoon. Lars thinks about the week, Lotte sees what worked and what didn't, and Thomas hears something interesting in the corridor."
    },
    kids: {
      "Being & Having": "Krishna wakes up early on a school day in a small Flemish village. His friend Sita is waiting outside, and Hanuman — the strongest, most helpful friend — is already carrying everyone's school bags.",
      "Modal Verbs": "Saturday morning. Krishna wants to go to the park, Sita thinks they should do homework first, and Hanuman can do both — he's Hanuman after all.",
      "Movement": "It's a sunny afternoon. Krishna runs to the park, Sita walks with her mother, and Hanuman leaps over the garden wall to meet them there.",
      "Communication": "At school, the children talk with their teacher, ask questions, and try to answer correctly. Hanuman always speaks clearly and helps when someone doesn't understand.",
      "Daily & Office Actions": "After school, there's work to do. Krishna reads his book, Sita writes a letter to her grandmother, and Hanuman helps everyone finish their tasks.",
      "Perception & Thinking": "Evening at home. Krishna hears music from the neighbour's house, Sita sees a beautiful sunset, and Hanuman thinks about everything that happened today."
    }
  }
};
