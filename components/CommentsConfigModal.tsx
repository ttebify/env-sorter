import { useAppContext } from "@env/contexts/AppContext";
import { FormDialog, FormLayout } from "@saas-ui/react";
import {
  Box,
  Button,
  Flex,
  Text,
  type UseDisclosureReturn,
} from "@chakra-ui/react";
import { Edit2, Trash2 } from "lucide-react";

type SlideOverProps = UseDisclosureReturn;

const CommentsConfigModal = (disclosureReturnProps: SlideOverProps) => {
  const { state } = useAppContext();
  const customSchemaItems = state.config.commentSchema;

  const onSubmit = async (data: any) => {
    disclosureReturnProps.onClose();
  };

  return (
    <FormDialog
      title="Define Comments Schema"
      defaultValues={{ pattern: "", comment: "", language: "" }}
      {...disclosureReturnProps}
      onSubmit={onSubmit}
    >
      {({ Field }) => (
        <FormLayout>
          <Field label="Search pattern" name="pattern" placeholder="APP_*" />
          <Field name="comment" placeholder="Comment" />
          <Field
            name="language"
            type="select"
            label="Programing language"
            options={[{ value: "Nodejs" }, { value: "PHP" }, { value: ".NET" }]}
            value="Nodejs"
          />
          <Button>Add Schema</Button>
          <Box bg="white" mb="4" w="full" mt="8">
            <Text fontSize="lg" fontWeight="bold" mb="2">
              Defined custom schema
            </Text>
            <Text fontSize="sm" fontWeight="semibold" mb="4" color="gray.500">
              {customSchemaItems.length}/23
            </Text>
            <Box overflowY="auto" maxH="32" mb="2">
              {customSchemaItems.map((item) => (
                <Flex key={item.id} alignItems="center" mb="2">
                  <Text fontWeight="bold" mr="1">
                    {item.searchPattern}
                  </Text>
                  <Text color="gray.400" mx="1">
                    /
                  </Text>
                  <Text color="gray.500" mr="auto">
                    {item.comment}
                  </Text>
                  <Flex>
                    <Edit2 />
                    <Trash2 />
                  </Flex>
                </Flex>
              ))}
            </Box>
          </Box>
        </FormLayout>
      )}
    </FormDialog>
  );
};

export default CommentsConfigModal;
