import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Pokemon {
    @Field()
    name: string;

    @Field()
    image: string;
}