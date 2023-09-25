import { z } from 'zod';

const TalkLengthOptions = {
  FIVE: 5,
  TEN: 10,
  FIFTEEN: 15,
  TWENTY: 20,
  TWENTY_FIVE: 25,
  THIRTY: 30,
  THIRTY_FIVE: 35,
  FORTY: 40,
  FORTY_FIVE: 45,
  FIFTY: 50,
  FIFTY_FIVE: 55,
  SIXTY: 60,
} as const;

const TalkLengths = z.nativeEnum(TalkLengthOptions);

export default TalkLengths;
