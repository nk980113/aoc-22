// ez
const input = `pnnfhnhshrhmhwwmwzmznmnwmwfmfhfjfcjjtgtbggpdgdjjbjrjsjpjrrmddmgmpmddrhddnfnfzfpfvpfpprhhlffmtffqhhdtdcdsswsdwswmmfvvpdprrnnhhhtffnfbbznbznnvdnnbffjrfrbfrbrgbrrntnggrqqwtqwwgjgsswgwqwtwwsvwvbwvwrwlrlppzfzwfzzpmzzhqqzqlzlglzzmrmwrmwwvmwvvnppjfjttlffhjjjsccbggnffqgfgjjnccmdmzmllvnlnznttlvlttvnvgnvvqvmvqqzrqqcgglzzwtztwwmjmzjjnddsffqrqlrrvsvdvldvvlgvlvccdzczcqcpphggtnthhhtbhtttcjtjcjgcjcbbrhbbfrffgjgdgzddcttczzsccbpcpddcpcggmjgjddtcccthccfrccmdmhmddnwddfldffntnptnpttcptcptpfphhmfmwfwmmlblgbgvbvlltqltldttfcfcclgcllmplmlbbjnjzjnzzttnvvgddshddsqddggsqgqddsggdhghjgjhhgchhdmdjmjddgdhghrrphrrpnnqhhjwwqrrcmmslmmszzpgzpzzrmzmznzllnjnnlnbbdvdsdffbpffcmmnznqqcbbzvvjnjvvwqwgqqpnnzwnzwnzwwwlpwpzzfqzfqqwnqnbnfnqnbqqbggqnqdndrrzzlffbbgqgfgrfrqqsddnqnqjjgssqwqwcqcpcrrqppwpjjfnfpffhphwwmcwwznwznnplptlplnlsnlsldslslsffwtwftwtbtdbbjsjcczwwfllwtlwtlwlvwlwrwppsggvcvrrqcrqqvmqvmmbrrsbsfspspjpnnmpmqmcczgzffqmfmtmpppwzppzrpzrzsrrpqrpqpmpvmpvpttbqtqmtmjttqdqgggcppclcjcpcsppctpplpdpcppcmmdzmzddvhvhnhrrldllcwwbnwnssshlhrhthggtmggbjbjwwbvbttjllvrrfggngvngnmmvzzrrmddmcddztztctfccqpcpcqqvqppqcqdcdhhvhssgfgzgwwzmmnssvwwbqbhbnhnphpqqjcqcddfwfttqjtqtlttglljgjbgjgnnsqqvrvffqvqfqbffljjpffssqdsqstqqqldqqmhmsmsqqwtqwqdqgdgjjfbjffgbbrhhqghgppqgpgmpmmfzfhhfrhffgmfggpzgpzzhtzhhlbhhqbbzvvnvqnntptmmbhbdhdwwmjjcnnmsscqcbbtjtvjvwjvvmsmjmtmpmgghttcztzggpddbfbfgbbdsdrsrrqfqjjqfjjhzhtzzmdzzcgzgdzzmvmmfmjmgjmggmppbdppmzpppvfppzhhfsfwfhhpjpmmrjjpssdccjpjpwjppvdpphcpcjcfjfwjfwfjwfjjqcqcwqqqsmmmbbgdgwwpcwwdfdlflrltlgtthfhfjhhlthtddlgdggsjsrrdpdcppgttphpgpwppmpzmmrjmmvjvgvgfglfgllbqlqhllszzlwwhzzdfdcdtctptwtztfzzmjzjtjtrjrcrnrjjmwmnnbddgvgtgsstjsszmpqdmzgqflrbrspjmtzjcrmlzltmhgblghnwqvwwqwzbpnfrpdpblpjgshfccfbjfsnwvvhnjftsdnsgtzzjtzpmtfdvzrhtqpblhwgmqtgpbfvbdmsnrrrvvbstpsznvbbwgjfqjrhdvwvgptpglpfddhddmtglmjlpwlvfpbtbmgbplbzrlpdlvqzcwhbscpszgfstjpfdvfpmljlngrbgrdnnblzqrfpzsdvblpwbtnhdjclldvwvbwcwzfzbdspgwpfqjfbdbrqcshtlvcrdstnzggbwqnzbrfzbpnrtmvpbvdhcvdsdshgtvhfgdzljflppqbwclnvbhbczvrscjhlbgbfvwdjhnjsgmvwhpfgwbbmnndpnglfrmtfdzvqgfjdqfhgrhvpbqndmqnqccgwswwdsqjnbjtjbjdbqgjnmfbdvlnfwbnrdqgvgzzhmmbbdzfdvvpwhpbwbnzdcdpchrwlhfsjnhhjggvplmqggwjdsvjtpnpnqgldjjdcscrdltssjdrpcrfbgbcjfplhzgwbprfcslhpcngtszrghmwhzdqscbfrhzdwcffzvmjrmcjcstfvhplvrsglgsjnjtrpddsdfqjsndjnfmvdhfgdbzzflqhsrrwmrnlpqzmcddqbqvvzgtlztpgjnddtcnbmqsjlhmcszrmcjvwzpptlfqsmpvgnzvrjdwzpdwqgbmdgdtvjlmfczthjbcgfhbqpnmlbmrwwhfptzlbmfdhssznjcvjbmnjtnvzjhzczlrrdnttmmcbnzhqpplzqwgttwrnwfvmnptgqlfrnzvqpjfgrzwmlcwvtptvcvrlsrdwdgqfvffspmdbnnrqjttpqvhvdpbcrvzptwnhhfsqzchmncvttcdgdnlppcfzpmjpvbvqhlvplwvrmmbbggbwttwmvsqjlllsftprsmtmnzjcqfzblrllzgshfljchrjwjlpvhpbrtrsschzltrblgjnbgdnmwdggjhqggntblnhsvfgsbcblhmctbqzqwmhqnjhpzjfqpjdgwpzhczcftfcpdhvzhzccmwmrfrbqshzmtpqgpbbvfqqbjbmvnlnlwjtzrpmhdlffccrqcfgsjfszbrzrfztntchtmgmbhjgmlsqzcbtqqjzzlghtzzqmlnnvsgsvbbjfgqsqbqmqrdzwpwdgbggpdvhvnlzshhntprjdwhnwfvdjzpqgflwrvwgtmfdmfdztcbtfnjdrvgdwwczdgphnvdgrbdchprqldfjrvcsflcmlcmzqvqgsgnzcgmrhccgcmptcdzhbcdgdtppwztfstzqqzqrdzlnzthggjmpcflmbcmdrrjnnpbpqfmjbzqbtsjjgdlmgncbmgspqqvbrvzrdjscpzjsdtcdvsdwqlmwrngttswnrsbqctvhgfnnwblpcqzdmzpfchplslspmghvgcqntmlrfhgpcbpspvfhnvqvglsqzsnsdzddqpbsjhlclslngbwvvgjhwfcncqsmqwbptzvpzlzslsjjjldjpwpfrdlfbjphqcjtsgqdsdfdjhqgdhcppndwmhmmldvvmblcqcqfqhltbcbvrnghjfmtgqwtwljtczvqlnmgscjhqdhnzwhzvzzqnlsrhqvljqpgpwghfqlhjjrrhvnmnnrbnlhdcjctwtlhmhhmhjvcgzdrzmdjrvqzgnsttjdwglgwlcmbcdnjprgfsbbdzzngbqdrvwwwhbtlnnmzqdjttsrrpvlfdqnfhhtdtvmpcjgdwtbnqmwmtszdqfmbhjsjpqqddzfggwjhbtlnqfgcwbjzdtcpcpzgnrmnvwlpgmwfjlpgppdfrfvvjwsfcdqdnpcpjbqsvhttssgptqjghctrbgntlfjzdrfjccsprsjlrrwrzsmnjsqslmpdtrvhlqbnmgpjthpqdqmnvrtzlhhzzfzbrcclpmpcszhbttgrtcpgcpjwpdbfpfvgspsgtvglwthqcmcvmrfmclwlvjlsptfgmtlrnsvjrnfwzhdcsmgztpzfcvzwdztpppvqpvqfpdrsfnlhrbqwrsqjtwjmhnpwmqmpdgdhbtbpfwnmswffdqffdggrdrpmngvpzplmmwlddnhcvjjzqqfsbbtfmzdwnpvbjrshmllczhgvwwcbcbtfrfnplqjwmjlvpwwgfrtffwddwppsgtnlmpvfnhfzcsgjbqbjmbvpnqppsrvwnlzvcmjqgtbzrdsnrgwbfmrvnflgccrssfvcwgllqqbbcthzmbtnsmbzbcczhtzcvmthttpltrtdmgspctvtpvqbhmnnpnjwmhpqclmjsdrbjwvjbtzcjlqbjsvbgdwqzflnwzcfjwtrhjgfshfmwbjfwpnhjsmtpgbpwlfjjnmdlrhchmnfmgmgcrftmwbzshdwbhndgwtjbrrvbwprqppfmgfmfllpcjgrwdmtzddthsjlgjljv`;

function main() {
    let i = 0;
    for (; ; i++) {
        if ([...new Set(input.slice(i, i + 14))].length === 14) break;
    }
    console.log(i + 14); // 3774
}

console.time('');
main();
console.timeEnd(''); // 8.886ms